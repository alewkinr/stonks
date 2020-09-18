import { AccountType } from "../../enums/AccountType";
import { Keys } from "./Account.keys";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const setAccountType = (accountType: AccountType) => {
    return {
        type: Keys.SET_ACCOUNT_TYPE,
        accountType,
    } as const;
};

export const setOriginalAmount = (originalAmount: string) => {
    return {
        type: Keys.SET_ORIGIN_AMOUNT,
        originalAmount,
    } as const;
};

export const setDepositingFunds = (depositingFunds: string) => {
    return {
        type: Keys.SET_DEPOSITING_FUNDS,
        depositingFunds,
    } as const;
};

export const setForecastPeriod = (forecastPeriod: number) => {
    return {
        type: Keys.SET_FORECAST_PERIOD,
        forecastPeriod,
    } as const;
};

export const setReinvestment = (reinvestment: boolean) => {
    return {
        type: Keys.SET_REINVESTMENT,
        reinvestment,
    } as const;
};
