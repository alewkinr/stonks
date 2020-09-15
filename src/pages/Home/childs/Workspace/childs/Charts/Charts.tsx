import React from "react";
import { ChartsView } from "./Charts.view";

type ChartsState = {
    onProfit?: boolean;
};

export type ChartsProps = ChartsState;

export const Charts: React.FC<ChartsProps> = (props) => {
    return <ChartsView {...props} />;
};

Charts.defaultProps = {
    onProfit: true,
};
