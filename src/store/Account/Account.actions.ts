import { AccountType } from "../../enums/AccountType";
import { Keys } from "./Account.keys";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const setAccountType = (accountType: AccountType) => {
	return {
		type: Keys.SET_ACCOUNT_TYPE,
		accountType,
	} as const;
}

export const setOriginAmount = (originAmount: string) => {
	return {
		type: Keys.SET_ORIGIN_AMOUNT,
		originAmount,
	} as const;
}
