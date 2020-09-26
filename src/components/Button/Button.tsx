import React from "react";
import { ButtonView } from "./Button.view";
import { ButtonType } from "./types/ButtonType";

type ButtonState = {
	name?: string;
	type?: ButtonType;
	className?: string;
};

export type ButtonProps = ButtonState;

export const Button: React.FC<ButtonProps> = (props) => {
	return <ButtonView {...props} />
}
