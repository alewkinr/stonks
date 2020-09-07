import React from "react";
import { ToggleView } from "./Toggle.view";

type ToggleState = {
	title: string;
};

export type ToggleProps = ToggleState;

export const Toggle: React.FC<ToggleProps> = (props) => {
	return <ToggleView {...props} />
}
