import {Keys} from "./Calculator.keys";
import {Actions} from "./Calculator.actions.type";
import {initState, State} from "./Calculator.state";
import {Bond} from "../../common/types";

export const calculator = (state = initState, action: Actions): State => {
    switch (action.type) {
        case Keys.INITIALIZE_BONDS:
            return {...state, bonds: action.bonds};
        case Keys.SET_INSTRUMENT_NUMBER_IN_PORTFOLIO:
            let bonds: { [instrumentId: string]: Bond } = state.bonds;
            let portfolio: { [instrumentId: string]: number } = state.portfolio;
            let instrumentId = action.instrumentId;
            let numberToSet = action.instrumentNumber;

            if (!bonds.hasOwnProperty(instrumentId)) {
                console.log("something goes wrong, instrumentId not found");
                return state;
            }

            if (numberToSet < 0) {
                console.log("something goes wrong, numberToSet < 0, don't handle this request");
                return state;
            }

            if (numberToSet == 0) {

                if (portfolio.hasOwnProperty(instrumentId)) {
                    delete portfolio[instrumentId];
                }
            } else {
                portfolio[instrumentId] = numberToSet;
            }
            return {
                ...state,
                portfolio: portfolio,
                addInstrumentModalIsShown: false,
                instrumentToAddId: "",
                instrumentToAddNumber: 0,
            };
        case Keys.CHANGE_INSTRUMENT_TO_ADD_ID_INPUT:
            return {
                ...state,
                instrumentToAddId: action.instrumentToAddId
            };
        case Keys.CHANGE_INSTRUMENT_TO_ADD_NUMBER_INPUT:
            let instrumentToAddNumber = action.instrumentToAddNumber;

            if (instrumentToAddNumber == null || instrumentToAddNumber === "") {
                return {
                    ...state,
                    instrumentToAddNumber: 0
                };
            }

            if (/^\d+$/.test(instrumentToAddNumber)) {
                return {
                    ...state,
                    instrumentToAddNumber: +instrumentToAddNumber
                };
            }
            return state;
        case Keys.OPEN_ADD_INSTRUMENT_MODAL:
            return {
                ...state,
                addInstrumentModalIsShown: true,
                instrumentToAddId: "",
                instrumentToAddNumber: 0
            };
        case Keys.CLOSE_ADD_INSTRUMENT_MODAL:
            return {
                ...state,
                addInstrumentModalIsShown: false,
                instrumentToAddId: "",
                instrumentToAddNumber: 0
            };
        default:
            return state;
    }
}
