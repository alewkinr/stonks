import React from "react";
import { InputScrollableRangeView } from "./InputScrollableRange.view";

type InputScrollableRangeState = {
	value: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type InputScrollableRangeProps = InputScrollableRangeState;

export const InputScrollableRange: React.FC<InputScrollableRangeProps> = (props) => {
	return <InputScrollableRangeView {...props} />
}
