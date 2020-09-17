import React from "react";
import { BondView } from "./Bond.view";

import {
    setInstrumentNumberInPortfolio,
    incrementInstrumentAmountInPortfolio,
    decrementInstrumentAmountInPortfolio,
} from "../../../../../../../../store/Portfolio/Portfolio.actions";

type BondState = {
    instrumentId: string;
    issuerTitle: string;
    logoUrl: string;
    amount: number;
    fullPrice: number;
    onIncrement: typeof incrementInstrumentAmountInPortfolio;
    onDecrement: typeof decrementInstrumentAmountInPortfolio;
    onSetAmount: typeof setInstrumentNumberInPortfolio;
};

export type BondProps = BondState;

export const Bond: React.FC<BondProps> = (props) => {
    return <BondView {...props} />;
};
