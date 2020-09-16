import { combineReducers } from "redux";
import { account } from "./Account/Account.reducer";
import { portfolio } from "./Portfolio/Portfolio.reducer"

export const rootReducer = combineReducers({
	// список reducer'ов
	account,
	portfolio,
});

export type AppState = ReturnType<typeof rootReducer>;
