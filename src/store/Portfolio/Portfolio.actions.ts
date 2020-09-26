import { Keys } from "./Portfolio.keys";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const setInstrumentNumberInPortfolio = (instrumentId: string, instrumentNumber: number) => {
    return {
        type: Keys.SET_INSTRUMENT_NUMBER_IN_PORTFOLIO,
        instrumentId,
        instrumentNumber
    } as const;
}

export const incrementInstrumentAmountInPortfolio = (instrumentId: string) => {
    return {
        type: Keys.INCREMENT_INSTRUMENT_AMOUNT_IN_PORTFOLIO,
        instrumentId
    } as const;
}

export const decrementInstrumentAmountInPortfolio = (instrumentId: string) => {
    return {
        type: Keys.DECREMENT_INSTRUMENT_AMOUNT_IN_PORTFOLIO,
        instrumentId
    } as const;
}