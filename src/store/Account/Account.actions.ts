import { Keys } from "./Account.keys";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const setIsIndividualInvestmentAccount = (isIndividualInvestmentAccount: boolean) => {
	return {
		type: Keys.SET_IS_INDIVIDUAL_INVESTMENT_ACCOUNT,
		isIndividualInvestmentAccount,
	} as const;
}

export const setOriginAmount = (originAmount: string) => {
	return {
		type: Keys.SET_ORIGIN_AMOUNT,
		originAmount,
	} as const;
}
