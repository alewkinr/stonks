export type State = {
	endDate: Date;
	totalAmount: string;
	profitAmount: string;
	profitPercent: string;
};

export const initState: State = {
	endDate: new Date((new Date()).setFullYear((new Date).getFullYear() + 5)),
	totalAmount: "100 000",
	profitAmount: "5 000",
	profitPercent: "5.04",
};
