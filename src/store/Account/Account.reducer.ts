import { Keys } from "./Account.keys";
import { Actions } from "./Account.actions.type";
import { initState, State } from "./Account.state";

export const account = (state = initState, action: Actions): State => {
    switch (action.type) {
        case Keys.SET_ACCOUNT_TYPE:
            return { ...state, accountType: action.accountType };
        case Keys.SET_ORIGIN_AMOUNT:
            return { ...state, originalAmount: action.originalAmount };
        case Keys.SET_DEPOSITING_FUNDS:
            return { ...state, depositingFunds: action.depositingFunds };
        case Keys.SET_FORECAST_PERIOD:
            return { ...state, forecastPeriod: action.forecastPeriod };
        case Keys.SET_REINVESTMENT:
            return { ...state, reinvestment: action.reinvestment };
        default:
            return state;
    }
};
