import React from "react";
import { ToggleView } from "./Toggle.view";

type ToggleState = {
	checked: boolean;
};

type ToggleDispatch = {
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ToggleProps = ToggleState & ToggleDispatch;

export const Toggle: React.FC<ToggleProps> = (props) => {
	return <ToggleView {...props} />
}
