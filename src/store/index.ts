import { combineReducers } from "redux";
import { calculator } from "./Calculator/Calculator.reducer";
import { account } from "./Account/Account.reducer";
import { projection } from "./Projection/Projection.reducer";
import { portfolio } from "./Portfolio/Portfolio.reducer"

export const rootReducer = combineReducers({
	// список reducer'ов
	calculator,
	account,
	projection,

	// portfolio
	portfolio,
});

export type AppState = ReturnType<typeof rootReducer>;
