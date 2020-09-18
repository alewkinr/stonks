import { AccountType } from "../../enums/AccountType";

export type State = {
    accountType: AccountType;
    forecastPeriod: number;
    originalAmount: string;
    depositingFunds: string;
    reinvestment: boolean;
};

export const initState: State = {
    accountType: AccountType.BROKER,
    forecastPeriod: 1,
    originalAmount: "400000",
    depositingFunds: "0",
    reinvestment: false,
};
