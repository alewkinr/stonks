import { combineReducers } from "redux";
import { calculator } from "./Calculator/Calculator.reducer";

export const rootReducer = combineReducers({
	// список reducer'ов
	calculator,
});

export type AppState = ReturnType<typeof rootReducer>;
