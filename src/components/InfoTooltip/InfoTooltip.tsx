import React from "react";
import { InfoTooltipView } from "./InfoTooltip.view";

type InfoTooltipState = {
	text: string;
	interactive?: boolean;
	absolute?: boolean;
};

export type InfoTooltipProps = InfoTooltipState;

export const InfoTooltip: React.FC<InfoTooltipProps> = (props) => {
	return <InfoTooltipView {...props} />
}

InfoTooltip.defaultProps = {
	interactive: false,
	absolute: false,
};
