import { AccountType } from "../../enums/AccountType";

export type State = {
    accountType: AccountType;
    originalAmount: string;
    depositingFunds: string;
};

export const initState: State = {
    accountType: AccountType.BROKER,
    originalAmount: "100000",
    depositingFunds: "10000",
};
