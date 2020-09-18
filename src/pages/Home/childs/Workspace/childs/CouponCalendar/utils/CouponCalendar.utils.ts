import { CouponCalendarPayment } from "../CouponCalendar";

import { Bond, BondPayment } from "../../../../../../../common/types";
import { ToTimestamp } from "../../../../../../../common/utils/TimeUtils";
import {
    FindBondByInstrumentId,
    FindBondAmountByInstrumentId,
} from "../../../../../../../store/Portfolio/utils/Portfolio.utils";
import { Console } from "console";

import { AccountType } from "../../../../../../../enums/AccountType";
import { solvingForecastSumsCalendarAndChartData } from "../../../../../../../common/compute";
import { OriginalAmount } from "../../../../Sidebar/childs/ControlPanel/childs/OriginalAmount";

// _fillCalendarMap - предподготавливает данные
const _fillCalendarMap = (
    bonds: { [instrumentId: string]: Bond },
    portfolio: { [instrumentId: number]: number }
): Map<string, Array<BondPayment>> => {
    let result: Map<string, Array<BondPayment>> = new Map();
    Object.keys(bonds).forEach((i) => {
        let amount = FindBondAmountByInstrumentId(
            portfolio,
            bonds[i].instrumentId
        );
        if (amount > 0) {
            let bond = FindBondByInstrumentId(bonds, bonds[i].instrumentId);
            result.set(bonds[i].instrumentId, bond.couponCalendar);
        }
    });

    return result;
};

// CombineCouponCalendar собирает данные для календаря купонов
const CombineCouponCalendar = (
    bonds: { [instrumentId: string]: Bond },
    portfolio: { [instrumentId: number]: number },
    iis: AccountType = AccountType.BROKER,
    orgignalAmount: number = 0
): Array<CouponCalendarPayment> => {
    // Map<string, Array<CouponCalendarPayment>> => {
    let calendarMap = _fillCalendarMap(bonds, portfolio);
    let res: Map<string, Array<CouponCalendarPayment>> = new Map();

    if (calendarMap.size === 0) {
        return [];
    }

    for (let [_iid, bondPayments] of calendarMap) {
        let cp: Array<CouponCalendarPayment> = [];
        let bond = FindBondByInstrumentId(bonds, _iid);

        let quantity: number = FindBondAmountByInstrumentId(
            portfolio,
            bond.instrumentId
        );
        let startDate = new Date();

        bondPayments.forEach((payment) => {
            let p: CouponCalendarPayment = {
                instrumentId: _iid,
                issuerLogoUrl: bond.issuerImg,
                paymentDate: payment.date.toString(),
                issuerName: bond.name,
                couponPaymentAmount: payment.payment * quantity,
            };

            if (new Date(p.paymentDate) > startDate) cp.push(p);
        });

        //ИИС
        if (iis === AccountType.INDIVIDUAL_INVESTMENT) {
            let year = startDate.getFullYear() + 1;
            let endYear = year + 7;
            while (year <= endYear) {
                cp.push({
                    instrumentId: `iis_${year}`,
                    issuerLogoUrl: "",
                    paymentDate: `${year}-01-01`,
                    issuerName: "ИИС",
                    couponPaymentAmount: 0,
                });
                year++;
            }
        }
        res.set(_iid, cp);
    }

    let result = JoinCouponPayments(res, orgignalAmount);

    return result;
};

// _sortCouponPaymentsByDate - сортирует массив по дате
const _sortCouponPaymentsByDate = (
    payments: Array<CouponCalendarPayment>
): Array<CouponCalendarPayment> => {
    return payments.sort((i, j) => {
        return ToTimestamp(i.paymentDate) - ToTimestamp(j.paymentDate);
    });
};

// JoinCouponPayments объединяем нужные нам купонные выплаты для удобного рендера
const JoinCouponPayments = (
    calendarData: Map<string, Array<CouponCalendarPayment>>,
    orgignalAmount: number = 0
): Array<CouponCalendarPayment> => {
    let result: Array<CouponCalendarPayment> = [];
    calendarData.forEach((payments, instrumentId) => {
        payments.forEach((payment, i) => {
            result.push({
                instrumentId,
                issuerLogoUrl: payment.issuerLogoUrl,
                paymentDate: payment.paymentDate,
                issuerName: payment.issuerName,
                couponPaymentAmount: payment.couponPaymentAmount,
            });
        });
    });

    result = _sortCouponPaymentsByDate(result);

    let yearSum: number = orgignalAmount;
    result.forEach((res, i) => {
        yearSum += res.couponPaymentAmount;
        if (res.issuerName === "ИИС") {
            res.couponPaymentAmount = Math.floor(yearSum * 0.13);
            yearSum = 0;
        }
    });

    return result;
};

export { CombineCouponCalendar, JoinCouponPayments };
