import { CouponCalendarPayment } from "../CouponCalendar"

import { Bond, BondPayment } from "../../../../../../../common/types";
import { ToTimestamp } from "../../../../../../../common/utils/TimeUtils";
import { FindBondByInstrumentId, FindBondAmountByInstrumentId } from "../../../../../../../store/Portfolio/utils/Portfolio.utils"

// _fillCalendarMap - предподготавливает данные
const _fillCalendarMap = (
  bonds: { [instrumentId: string]: Bond },
  portfolio: { [instrumentId: number]: number }
): Map<string, Array<BondPayment>> => {

  let result: Map<string, Array<BondPayment>> = new Map();
  Object.keys(bonds).forEach(
    i => {
      let amount = FindBondAmountByInstrumentId(portfolio, bonds[i].instrumentId);
      if (amount > 0) {
        let bond = FindBondByInstrumentId(bonds, bonds[i].instrumentId)
        result.set(bonds[i].instrumentId, bond.couponCalendar)
      }
    }
  );

  return result;
}

// CombineCouponCalendar собирает данные для календаря купонов
const CombineCouponCalendar = (bonds: { [instrumentId: string]: Bond }, portfolio: { [instrumentId: number]: number }):
  Map<string, Array<CouponCalendarPayment>> => {

  let calendarMap = _fillCalendarMap(bonds, portfolio);
  let res: Map<string, Array<CouponCalendarPayment>> = new Map();

  if (calendarMap.size === 0) {
    return res;
  }

  for (let [_iid, bondPayments] of calendarMap) {
    let cp: Array<CouponCalendarPayment> = [];
    let bond = FindBondByInstrumentId(bonds, _iid);

    bondPayments.forEach(payment => {
      let p: CouponCalendarPayment = {
        instrumentId: _iid,
        issuerLogoUrl: bond.issuerImg,
        paymentDate: payment.date.toString(),
        issuerName: bond.name,
        couponPaymentAmount: payment.payment,
      };
      cp.push(p);
    });

    res.set(_iid, cp);
  }
  return res;
};



// _sortCouponPaymentsByDate - сортирует массив по дате
const _sortCouponPaymentsByDate = (payments: Array<CouponCalendarPayment>): Array<CouponCalendarPayment> => {
  return payments.sort(
    (i, j) => {
      return (ToTimestamp(i.paymentDate) - ToTimestamp(j.paymentDate))
    }
  )
}

// JoinCouponPayments объединяем нужные нам купонные выплаты для удобного рендера
const JoinCouponPayments = (calendarData: Map<string, Array<CouponCalendarPayment>>): Array<CouponCalendarPayment> => {
  let result = [];
  calendarData.forEach(
    (payments, instrumentId) => {
      payments.forEach(
        (payment, i) => {
          result.push({
            instrumentId,
            issuerLogoUrl: payment.issuerLogoUrl,
            paymentDate: payment.paymentDate,
            issuerName: payment.issuerName,
            couponPaymentAmount: payment.couponPaymentAmount,
          })
        });
    });

  return _sortCouponPaymentsByDate(result);
};

export { CombineCouponCalendar, JoinCouponPayments }