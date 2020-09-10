import {Keys} from "./Calculator.keys";
import {Bond} from "../../common/types";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const initializeBonds = (bonds: { [instrumentId: string]: Bond }) => {
    return {
        type: Keys.INITIALIZE_BONDS,
        bonds
    } as const;
}

export const setInstrumentNumberInPortfolio = (instrumentId: string, instrumentNumber: number) => {
    return {
        type: Keys.SET_INSTRUMENT_NUMBER_IN_PORTFOLIO,
        instrumentId,
        instrumentNumber
    } as const;
}

export const removeInstrumentFromPortfolio = (instrumentId: string) => {
    return {
        type: Keys.REMOVE_INSTRUMENT_FROM_PORTFOLIO,
        instrumentId
    } as const
}

export const changeInstrumentToAddIdInput = (instrumentToAddId: string) => {
    return {
        type: Keys.CHANGE_INSTRUMENT_TO_ADD_ID_INPUT,
        instrumentToAddId
    } as const;
}

export const changeInstrumentToAddNumberInput = (instrumentToAddNumber: string) => {
    return {
        type: Keys.CHANGE_INSTRUMENT_TO_ADD_NUMBER_INPUT,
        instrumentToAddNumber
    } as const;
}

export const openAddInstrumentModal = () => {
    return {
        type: Keys.OPEN_ADD_INSTRUMENT_MODAL
    } as const
}

export const closeAddInstrumentModal = () => {
    return {
        type: Keys.CLOSE_ADD_INSTRUMENT_MODAL
    } as const
}
