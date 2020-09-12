import React from "react";
import { DepositingFundsView } from "./DepositingFunds.view";

type DepositingFundsState = { /* your states */ };

export type DepositingFundsProps = DepositingFundsState;

export const DepositingFunds: React.FC<DepositingFundsProps> = (props) => {
	return <DepositingFundsView {...props} />
}
