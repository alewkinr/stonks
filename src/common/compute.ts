import { CouponCalendar, Bond, BondPayment } from "./types";

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

export function solvingForecastSumsCalendarAndChartData(
    originalSum: number,
    funds: number,
    period: number,
    bonds: Array<{ bond: Bond; quantity: number }>,
    iis: boolean
): {
    sum: number;
    porfit: number;
    percent: number;
    calendar: Array<CouponCalendar>;
    barChartData: (string | Date | number)[][];
    pieChartData: (string | number)[][];
} {
    const dateNow = new Date();

    var portfolioSum: number = 0;

    const calendarArrays: BondPayment[][] = [];
    const issuerNames: Array<string> = [];

    var pieChartData: (string | number)[][] = [];
    pieChartData.push(["Облигация", "Сумма"]);

    // solving portfolio sum
    for (var i = 0; i < bonds.length; i++) {
        let { bond, quantity } = bonds[i];
        portfolioSum += Number(bond.notional) * quantity;

        calendarArrays.push(bond.couponCalendar);
        issuerNames.push(bond.issuer);

        pieChartData.push([bond.issuer, Number(bond.notional) * quantity]);
    }

    const couponCalendar: CouponCalendar[] = [];
    const elementIdxs = calendarArrays.map(() => 0);

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
        couponCalendar.push(
            new CouponCalendar(
                nextItem.calendarLine.date,
                issuerNames[nextItem.arrayIdx],
                nextItem.calendarLine.payment * bonds[nextItem.arrayIdx].quantity
            )
        );
        elementIdxs[nextItem.arrayIdx]++;
    }

    let barChartData: (string | Date | number)[][] = [];
    barChartData.push(["Дата", "Облигации", "Свободные средства"]);

    let freeMoney = originalSum - portfolioSum;
    let sum: number = originalSum;
    let profit: number = 0;
    for (let i = 0; i < couponCalendar.length; i++) {
        let calendarLine = couponCalendar[i];
        sum += calendarLine.payment;
        profit += calendarLine.payment;
        freeMoney += calendarLine.payment;
        barChartData.push([calendarLine.date, portfolioSum, freeMoney]);
    }

    return {
        sum: sum,
        porfit: profit,
        percent: profit / sum,
        calendar: couponCalendar,
        barChartData: barChartData,
        pieChartData: pieChartData,
    };
}
