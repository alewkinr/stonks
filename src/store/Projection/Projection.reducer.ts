import { Keys } from "./Projection.keys";
import { Actions } from "./Projection.actions.type";
import { initState, State } from "./Projection.state";

export const projection = (state = initState, action: Actions): State => {
	switch (action.type) {
		case Keys.SET_PROFIT_AMOUNT:
			return { ...state, profitAmount: action.profitAmount };
		case Keys.SET_PROFIT_PERCENT:
			return { ...state, profitPercent: action.profitPercent };
		case Keys.SET_TOTAL_AMOUNT:
			return { ...state, totalAmount: action.totalAmount };
		case Keys.SET_END_DATE:
			return { ...state, endDate: action.endDate };
		default:
			return state;
	}
};
