import React from "react";
import { CalculatorView } from "./Calculator.view";

type CalculatorState = { /* your states */ };

export type CalculatorProps = CalculatorState;

export const Calculator: React.FC<CalculatorProps> = (props) => {
	return <CalculatorView {...props} />
}
