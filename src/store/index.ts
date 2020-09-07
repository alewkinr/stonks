import { combineReducers } from "redux";
import { calculator } from "./Calculator/Calculator.reducer";
import { account } from "./Account/Account.reducer";

export const rootReducer = combineReducers({
	// список reducer'ов
	calculator,
	account,
});

export type AppState = ReturnType<typeof rootReducer>;
