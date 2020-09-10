export type State = {
	isIndividualInvestmentAccount: boolean;
	originAmount: string;
};

export const initState: State = {
	isIndividualInvestmentAccount: false,
	originAmount: "",
};
