import {Bond} from "../../common/types";

export type State = {
	bonds: Array<Bond>
};

export const initState: State = {
	bonds: []
};
