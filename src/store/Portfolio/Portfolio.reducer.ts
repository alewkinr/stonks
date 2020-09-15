import { Keys } from "./Portfolio.keys";
import { Actions } from "./Portfolio.actions.type";
import { initState, State } from "./Portfolio.state";
import { Bond } from "../../common/types";

export const portfolio = (state = initState, action: Actions): State => {
    switch (action.type) {
        case Keys.INCREMENT_INSTRUMENT_AMOUNT_IN_PORTFOLIO:
            let bonds: { [instrumentId: string]: Bond } = state.bonds;
            let portfolio: { [instrumentId: string]: number } = state.portfolio;
            let instrumentId = action.instrumentId;


            if (!state.bonds.hasOwnProperty(instrumentId)) {
                console.log("something goes wrong, instrumentId not found");
                return state;
            }

            if (portfolio[instrumentId] == 0) {
                return state;
            }

            portfolio[instrumentId] = --portfolio[instrumentId]

            return {
                ...state,
                portfolio: portfolio,
            }

        case Keys.DECREMENT_INSTRUMENT_AMOUNT_IN_PORTFOLIO:
            instrumentId = action.instrumentId;
            portfolio = state.portfolio;

            if (!bonds.hasOwnProperty(instrumentId)) {
                console.log("something goes wrong, instrumentId not found");
                return state;
            }

            if (portfolio[instrumentId] == 0) {
                return state;
            }

            portfolio[instrumentId] = --portfolio[instrumentId]

            return {
                ...state,
                portfolio: portfolio,
            }

        case Keys.SET_INSTRUMENT_NUMBER_IN_PORTFOLIO:
            bonds = state.bonds;
            portfolio = state.portfolio;
            instrumentId = action.instrumentId;
            let numberToSet = action.instrumentNumber;

            if (!bonds.hasOwnProperty(instrumentId)) {
                console.log("something goes wrong, instrumentId not found");
                return state;
            }

            if (portfolio.hasOwnProperty(instrumentId)) {
                console.log("something goes wrong, instrumentId not found in portfolio");
                return state;
            }

            if (numberToSet < 0) {
                console.log("something goes wrong, numberToSet < 0, don't handle this request");
                return state;
            }

            if (numberToSet == 0) {
                portfolio[instrumentId] = 0;
            }

            if (numberToSet > 0) {
                portfolio[instrumentId] = numberToSet;
            }

            return {
                ...state,
                portfolio: portfolio
            };

        default:
            return state;
    }
}
