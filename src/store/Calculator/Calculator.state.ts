import {Bond} from "../../common/types";

export type State = {
	bonds: { [instrumentId: string]: Bond }
};

export const initState: State = {
	bonds: {}
};
