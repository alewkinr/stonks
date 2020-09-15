import { AccountType } from "../../enums/AccountType";

export type State = {
	accountType: AccountType;
	originalAmount: string;
};

export const initState: State = {
	accountType: AccountType.BROKER,
	originalAmount: "",
};
