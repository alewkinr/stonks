import { combineReducers } from "redux";
import { calculator } from "./Calculator/Calculator.reducer";
import { projection } from "./Projection/Projection.reducer";

export const rootReducer = combineReducers({
	// список reducer'ов
	calculator,
	projection,
});

export type AppState = ReturnType<typeof rootReducer>;
