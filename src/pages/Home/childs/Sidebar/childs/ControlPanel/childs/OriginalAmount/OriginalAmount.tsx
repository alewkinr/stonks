import React from "react";
import { OriginalAmountView } from "./OriginalAmount.view";

type OriginalAmountState = { /* your states */ };

export type OriginalAmountProps = OriginalAmountState;

export const OriginalAmount: React.FC<OriginalAmountProps> = (props) => {
	return <OriginalAmountView {...props} />
}
