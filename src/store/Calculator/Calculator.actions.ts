import {Keys} from "./Calculator.keys";
import {Bond} from "../../common/types";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const initializeBonds = (bonds: { [instrumentId: string]: Bond }) => {
    return {
        type: Keys.INITIALIZE_BONDS,
        bonds
    } as const;
}
