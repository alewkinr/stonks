import React from "react";
import { Bond } from "../../../../../../common/types";
import { PortfolioView } from "./Portfolio.view";
import {
	setInstrumentNumberInPortfolio,
	incrementInstrumentAmountInPortfolio,
	decrementInstrumentAmountInPortfolio,
} from "../../../../../../store/Portfolio";
import { AppState } from "../../../../../../store";
import { connect } from "react-redux";

type PortfolioState = {
	bonds: { [instrumentId: string]: Bond };
	portfolio: { [instrumentId: number]: number };
};

type PortfolioDispatch = {
	setInstrumentNumberInPortfolio: typeof setInstrumentNumberInPortfolio,
	incrementInstrumentAmountInPortfolio: typeof incrementInstrumentAmountInPortfolio,
	decrementInstrumentAmountInPortfolio: typeof decrementInstrumentAmountInPortfolio,
};


export type PortfolioProps = PortfolioState & PortfolioDispatch;

const Portfolio: React.FC<PortfolioProps> = (props) => {
	return <PortfolioView {...props} />
}

const mapStateToProps = (state: AppState): PortfolioState => {
	const { bonds, portfolio } = state.portfolio;
	return { bonds, portfolio }
}

const mapDispatchToProps: PortfolioDispatch = {
	setInstrumentNumberInPortfolio: setInstrumentNumberInPortfolio,
	incrementInstrumentAmountInPortfolio: incrementInstrumentAmountInPortfolio,
	decrementInstrumentAmountInPortfolio: decrementInstrumentAmountInPortfolio,
};
export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);