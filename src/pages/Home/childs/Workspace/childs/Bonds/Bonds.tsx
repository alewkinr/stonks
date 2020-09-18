import React from "react";
import { BondsView } from "./Bonds.view";

type BondsState = { /* your states */ };

export type BondsProps = BondsState;

export const Bonds: React.FC<BondsProps> = (props) => {
	return <BondsView {...props} />
}
