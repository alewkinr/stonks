import { Keys } from "./Portfolio.keys";
import { Actions } from "./Portfolio.actions.type";
import { initState, State } from "./Portfolio.state";
import { Bond } from "../../common/types";
import { IsBondIncludedInPortfolio, CalculateBondsCost, FindBondByInstrumentId } from "./utils/Portfolio.utils"

export const portfolio = (state = initState, action: Actions): State => {
    switch (action.type) {
        case Keys.INCREMENT_INSTRUMENT_AMOUNT_IN_PORTFOLIO:
            let bonds: { [instrumentId: string]: Bond } = state.bonds;
            let portfolio: { [instrumentId: string]: number } = state.portfolio;
            let cost: Map<string, number> = state.cost;
            let instrumentId = action.instrumentId;


            if (!IsBondIncludedInPortfolio(state.bonds, instrumentId)) {
                console.log("something goes wrong, instrumentId not found");
                return state;
            };

            let bond = FindBondByInstrumentId(bonds, instrumentId);
            portfolio[instrumentId] = ++portfolio[instrumentId];
            cost.set(instrumentId, CalculateBondsCost(bond, portfolio[instrumentId]));

            return {
                ...state,
                portfolio: { ...portfolio },
                cost: cost,
            };

        case Keys.DECREMENT_INSTRUMENT_AMOUNT_IN_PORTFOLIO:
            bonds = state.bonds;
            portfolio = state.portfolio;
            cost = state.cost;
            instrumentId = action.instrumentId;

            if (!IsBondIncludedInPortfolio(state.bonds, instrumentId)) {
                console.log("something goes wrong, instrumentId not found");
                return state;
            };

            if (portfolio[instrumentId] === 0) {
                return state;
            };

            bond = FindBondByInstrumentId(bonds, instrumentId);
            portfolio[instrumentId] = --portfolio[instrumentId];
            cost.set(instrumentId, CalculateBondsCost(bond, portfolio[instrumentId]));

            return {
                ...state,
                portfolio: { ...portfolio },
                cost: cost,
            };

        case Keys.SET_INSTRUMENT_NUMBER_IN_PORTFOLIO:
            bonds = state.bonds;
            portfolio = state.portfolio;
            cost = state.cost;
            instrumentId = action.instrumentId;
            let numberToSet = action.instrumentNumber;

            bond = FindBondByInstrumentId(bonds, instrumentId);

            if (!IsBondIncludedInPortfolio(state.bonds, instrumentId)) {
                console.log("something goes wrong, instrumentId not found");
                return state;
            };

            if (numberToSet <= 0) {
                portfolio[instrumentId] = 0;
                cost.set(instrumentId, CalculateBondsCost(bond, 1));

                return {
                    ...state,
                    portfolio: { ...portfolio },
                    cost: cost,
                };
            }

            portfolio[instrumentId] = numberToSet;
            cost.set(instrumentId, CalculateBondsCost(bond, portfolio[instrumentId]));
            return {
                ...state,
                portfolio: { ...portfolio },
                cost: cost,
            };

        default:
            return state;
    };
};
