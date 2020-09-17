import { CouponCalendarLine, Bond, BondPayment } from "./types";

interface Item {
    arrayIdx: number;
    calendarLine: BondPayment;
}

function getMinValue(items: Item[]) {
    let minValueIdx = 0;
    for (let i = 1; i < items.length; i++) {
        if (items[i].calendarLine.date < items[minValueIdx].calendarLine.date)
            minValueIdx = i;
    }
    return items[minValueIdx];
}

function getFundDates(start: Date, end: Date): Array<Date> {
    let year = start.getFullYear();
    let month = start.getMonth();

    let endYear = end.getFullYear();
    let endMonth = end.getMonth();

    let dates: Array<Date> = [];
    while (year < endYear || (month < endMonth && year === endYear)) {
        let tempDate = new Date(year, month, 1);
        if (tempDate < start) {
            month++;
            if (month > 11) {
                month = 0;
                year++;
            } 
            continue;  
        };
        dates.push(tempDate);
        month++;
        if (month > 11) {
            month = 0;
            year++;
        }

    }

    return dates;
}

function setreinvest(quantitiesPrices, minPrice, freeMoney): number {
    for (let k = 0; k < quantitiesPrices.length; k++) {
        if (minPrice > freeMoney) break;
        let quantitiesPricesLine = quantitiesPrices[k];
        let num = Math.floor(freeMoney / quantitiesPricesLine.price);
        quantitiesPricesLine.quantity += num;
        freeMoney -= Math.floor(quantitiesPricesLine.price * num);
    }
    return freeMoney;
}

function dateCoupons(coupons: BondPayment[], start: Date, end: Date):  BondPayment[] {
    
    let result: BondPayment[] = [];
    for (let i=0; i< coupons.length; i++) {
        let coupon = coupons[i];
        let date = new Date(coupon.date.toString());
        if (date < start || date > end) continue;
        result.push(new BondPayment(new Date(coupon.date.toString()), coupon.payment));
    }
    return result;
}


export function solvingForecastSumsCalendarAndChartData(
    originalSum: number,
    funds: number,
    period: number,
    bonds: Array<{ bond: Bond; quantity: number }>,
    iis: boolean,
    reinvestment: boolean
): {
    sum: number;
    porfit: number;
    percent: number;
    calendar: Array<CouponCalendarLine>;
    barChartData: (string | Date | number)[][];
    pieChartData: (string | number)[][];
} {
    const date = new Date();
    const dateNow = new Date(date.getFullYear(), date.getMonth(), date.getDay());
    const endDate = new Date(
        dateNow.getFullYear() + period,
        dateNow.getMonth(),
        dateNow.getDay()
    );

    var portfolioSum: number = 0;

    const calendarArrays: BondPayment[][] = [];
    const issuerNames: Array<string> = [];
    const quantitiesPrices: Array<{
        quantity: number;
        price: number;
        index: number;
        couponCost: number;
    }> = [];

    var minPrice: number = 0;
    var pieChartData: (string | number)[][] = [];
    pieChartData.push(["Облигация", "Сумма"]);

    // solving portfolio sum
    for (var i = 0; i < bonds.length; i++) {
        let { bond, quantity } = bonds[i];
        portfolioSum += bond.price * quantity;
        //pieChartData.push([bond.issuer, bond.price * quantity]);

        calendarArrays.push(dateCoupons(bond.couponCalendar, dateNow, endDate));
        issuerNames.push(bond.issuer);
        quantitiesPrices.push({
            quantity: quantity,
            price: bond.price,
            index: i,
            couponCost: bond.couponCost,
        });

        minPrice = Math.min(minPrice, bond.price);
    }

    quantitiesPrices.sort((a, b) => {
        return b.couponCost - a.couponCost;
    });


    const couponCalendar: CouponCalendarLine[] = [];
    const elementIdxs = calendarArrays.map(() => 0);

    let prevYear: number = dateNow.getFullYear();
    const couponIndexes: number[] = [];

    // merge all dates to one
    while (true) {
        const smallestItems: Item[] = [];
        for (let arrayIdx = 0; arrayIdx < calendarArrays.length; arrayIdx++) {
            const relevantArray = calendarArrays[arrayIdx];
            const elementIdx = elementIdxs[arrayIdx];
            if (elementIdx === relevantArray.length) continue;            
            smallestItems.push({
                arrayIdx,
                calendarLine: relevantArray[elementIdx],
            });
        }

        if (smallestItems.length === 0) break;

        const nextItem = getMinValue(smallestItems);

        if (iis && prevYear < nextItem.calendarLine.date.getFullYear()) {
            prevYear++;
            couponCalendar.push(
                new CouponCalendarLine(new Date(prevYear, 0, 1), "ИИС", 0)
            );
            couponIndexes.push(nextItem.arrayIdx);
            console.log(new Date(prevYear, 0, 1));
        }

        couponCalendar.push(
            new CouponCalendarLine(
                nextItem.calendarLine.date,
                issuerNames[nextItem.arrayIdx],
                nextItem.calendarLine.payment * bonds[nextItem.arrayIdx].quantity
            )
        );
        couponIndexes.push(nextItem.arrayIdx);
        elementIdxs[nextItem.arrayIdx]++;
    }

    //console.log(couponCalendar);

    let barChartData: (string | Date | number)[][] = [];
    barChartData.push(["Дата", "Облигации", "Свободные средства"]);

    let freeMoney = originalSum - portfolioSum;
    let sum: number = originalSum;
    let profit: number = 0;

    let yearSum: number = originalSum;

    var fundsDates: Array<Date> = [];
    if (funds > 0) {
        fundsDates = getFundDates(dateNow, endDate);
    }

    var fundsIndex: number = 0;
    for (var i: number = 0; i < couponCalendar.length; i++) {
        let calendarLine = couponCalendar[i];
        let quantitypriceLine = quantitiesPrices[couponIndexes[i]];

        if (calendarLine.issuer === "ИИС") {
            calendarLine.payment = Math.round(yearSum * 0.13);
            yearSum = 0;
        }

        for (let j = fundsIndex; j < fundsDates.length; j++) {
            fundsIndex = j;
            if (fundsDates[j] > calendarLine.date) break;
            sum += funds;
            yearSum += funds;
            freeMoney += funds;

            if (reinvestment) {
                freeMoney = setreinvest(quantitiesPrices, minPrice, freeMoney);
            }
        }



        let payment = Math.floor(quantitypriceLine.couponCost * quantitypriceLine.quantity);
        sum += payment;
        profit += payment;
        yearSum += payment;
        freeMoney += payment;

        if (reinvestment) {
            freeMoney = setreinvest(quantitiesPrices, minPrice, freeMoney);
        }

        barChartData.push([calendarLine.date, portfolioSum, freeMoney]);
    }

    for (let i=0; i< quantitiesPrices.length; i++){
        let element = quantitiesPrices[i];
        pieChartData.push([issuerNames[i], element.price * element.quantity]);   
    }

    return {
        sum: sum,
        porfit: profit,
        percent: Math.round((profit * 100) / sum),
        calendar: couponCalendar,
        barChartData: barChartData,
        pieChartData: pieChartData,
    };
}
