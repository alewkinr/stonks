import React from "react";
import { InfoTooltipView } from "./InfoTooltip.view";

type InfoTooltipState = {
	text: string;
	type?: string;
};

export type InfoTooltipProps = InfoTooltipState;

export const InfoTooltip: React.FC<InfoTooltipProps> = (props) => {
	return <InfoTooltipView {...props} />
}
