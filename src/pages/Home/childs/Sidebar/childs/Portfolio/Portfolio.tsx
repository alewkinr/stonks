import React from "react";
import { PortfolioView } from "./Portfolio.view";

type PortfolioState = { /* your states */ };

export type PortfolioProps = PortfolioState;

export const Portfolio: React.FC<PortfolioProps> = (props) => {
	return <PortfolioView {...props} />
}
