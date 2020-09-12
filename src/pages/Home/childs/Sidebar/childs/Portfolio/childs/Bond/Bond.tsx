import React from "react";
import { BondView } from "./Bond.view";

type BondState = { /* your states */ };

export type BondProps = BondState;

export const Bond: React.FC<BondProps> = (props) => {
	return <BondView {...props} />
}
