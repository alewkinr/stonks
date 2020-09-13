import { Keys } from "./Account.keys";
import { Actions } from "./Account.actions.type";
import { initState, State } from "./Account.state";

export const account = (state = initState, action: Actions): State => {
	switch(action.type) {
		case Keys.SET_ACCOUNT_TYPE:
			return {...state, accountType: action.accountType}
		case Keys.SET_ORIGIN_AMOUNT:
			return {...state, originAmount: action.originAmount}
		default:
			return state;
	}
}
