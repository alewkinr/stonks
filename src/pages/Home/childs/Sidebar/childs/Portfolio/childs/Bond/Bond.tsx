import React from "react";
import { BondView } from "./Bond.view";

type BondState = {
    issuerTitle: string;
    logoUrl: string;
    amount: number;
    fullPrice: number;
    onIncrement: Function;
    onDecrement: Function;
};

export type BondProps = BondState;

export const Bond: React.FC<BondProps> = (props) => {
    return <BondView {...props} />;
};
