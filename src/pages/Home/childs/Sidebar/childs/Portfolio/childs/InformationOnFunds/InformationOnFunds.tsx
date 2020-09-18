import React from "react";
import { InformationOnFundsView } from "./InformationOnFunds.view";

type InformationOnFundsState = { /* your states */ };

export type InformationOnFundsProps = InformationOnFundsState;

export const InformationOnFunds: React.FC<InformationOnFundsProps> = (props) => {
	return <InformationOnFundsView {...props} />
}
