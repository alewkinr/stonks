import React from "react";
import { connect } from "react-redux";
import { PortfolioView } from "./Portfolio.view";
import {
    setInstrumentNumberInPortfolio,
    incrementInstrumentAmountInPortfolio,
    decrementInstrumentAmountInPortfolio,
} from "../../../../../../store/Portfolio/Portfolio.actions";

import { AppState } from "../../../../../../store";
import { Bond } from "../../../../../../common/types";

import { getBondsSum } from "../../../../../../common/compute";

type PortfolioState = {
    bonds: { [instrumentId: string]: Bond };
    portfolio: { [instrumentId: number]: number };
    cost: Map<string, number>;
    bondSum: number;
    freeMoney: number;
};

type PortfolioDispatch = {
    setInstrumentNumberInPortfolio: typeof setInstrumentNumberInPortfolio;
    incrementInstrumentAmountInPortfolio: typeof incrementInstrumentAmountInPortfolio;
    decrementInstrumentAmountInPortfolio: typeof decrementInstrumentAmountInPortfolio;
};

export type PortfolioProps = PortfolioState & PortfolioDispatch;

const Portfolio: React.FC<PortfolioProps> = (props) => {
    return <PortfolioView {...props} />;
};

const mapStateToProps = (state: AppState): PortfolioState => {
    const { bonds, portfolio, cost } = state.portfolio;
    const { originalAmount } = state.account;
    const bondSum = getBondsSum(bonds, portfolio);
    const freeMoney = Number(originalAmount) - bondSum;
    return { bonds, portfolio, cost, bondSum, freeMoney };
};

const mapDispatchToProps: PortfolioDispatch = {
    setInstrumentNumberInPortfolio: setInstrumentNumberInPortfolio,
    incrementInstrumentAmountInPortfolio: incrementInstrumentAmountInPortfolio,
    decrementInstrumentAmountInPortfolio: decrementInstrumentAmountInPortfolio,
};
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
