import React from "react";
import { LabelView } from "./Label.view";

type LabelState = {
	name?: string;
	description?: string;
};

export type LabelProps = LabelState;

export const Label: React.FC<LabelProps> = (props) => {
	return <LabelView {...props} />
}

Label.defaultProps = {
	name: "Наименование",
	description: "Описание",
}
