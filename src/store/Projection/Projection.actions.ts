import { Keys } from "./Projection.keys";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const setTotalAmount = (totalAmount: string) => {
  return {
    type: Keys.SET_TOTAL_AMOUNT,
    totalAmount,
  } as const;
};

export const setProfitAmount = (profitAmount: string) => {
  return {
    type: Keys.SET_PROFIT_AMOUNT,
    profitAmount,
  } as const;
};

export const setProfitPercent = (profitPercent: string) => {
  return {
    type: Keys.SET_PROFIT_PERCENT,
    profitPercent,
  } as const;
};

export const setEndDate = (endDate: Date) => {
  return {
    type: Keys.SET_END_DATE,
    endDate,
  } as const;
};
