export type State = {
  endDate: Date;
  totalAmount: string;
  profitAmount: string;
  profitPercent: string;
};

export const initState: State = {
  endDate: new Date(),
  totalAmount: "100 000",
  profitAmount: "5 000",
  profitPercent: "5.04",
};

initState.endDate.setFullYear(initState.endDate.getFullYear() + 5);

console.log(initState.endDate);
