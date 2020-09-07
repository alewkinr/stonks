import React from "react";
import { InputWithScrollableRangeView } from "./InputWithScrollableRange.view";

type InputWithScrollableRangeState = { /* your states */ };

export type InputWithScrollableRangeProps = InputWithScrollableRangeState;

export const InputWithScrollableRange: React.FC<InputWithScrollableRangeProps> = (props) => {
	return <InputWithScrollableRangeView {...props} />
}
