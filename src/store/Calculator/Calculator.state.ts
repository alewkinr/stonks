import {Bond} from "../../common/types";

export type State = {
	bonds: { [instrumentId: string]: Bond },
	portfolio: { [instrumentId: string]: number },
	addInstrumentModalIsShown: boolean,

	instrumentToAddId: string,
	instrumentToAddNumber: number
};

export const initState: State = {
	bonds: {},
	portfolio: {},
	addInstrumentModalIsShown: false,

	instrumentToAddId: "",
	instrumentToAddNumber: 0
};
