import React from "react";
import { CashView } from "./Cash.view";
import { Сurrency } from "./types/Сurrency";

type CashState = {
	value: string;
	currency: Сurrency;
};

export type CashProps = CashState;

export const Cash: React.FC<CashProps> = (props) => {
	return <CashView {...props} />
}
