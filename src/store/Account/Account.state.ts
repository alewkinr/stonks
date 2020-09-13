import { AccountType } from "../../enums/AccountType";

export type State = {
	accountType: AccountType;
	originAmount: string;
};

export const initState: State = {
	accountType: AccountType.BROKER,
	originAmount: "",
};
