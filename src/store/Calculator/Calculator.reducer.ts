import {Keys} from "./Calculator.keys";
import {Actions} from "./Calculator.actions.type";
import {initState, State} from "./Calculator.state";

export const calculator = (state = initState, action: Actions): State => {
    switch (action.type) {
        case Keys.INITIALIZE_BONDS:
            return {...state, bonds: action.bonds};
        default:
            return state;
    }
}
