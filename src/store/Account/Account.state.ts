import { AccountType } from "../../enums/AccountType";

export type State = {
    accountType: AccountType;
    forecastPeriod: number;
    originalAmount: string;
    depositingFunds: string;
    reinvestment: boolean;
};

export const initState: State = {
    accountType: AccountType.INDIVIDUAL_INVESTMENT,
    forecastPeriod: 3,
    originalAmount: "400000",
    depositingFunds: "10000",
    reinvestment: true,
};
