import React, {useEffect} from "react";
import {CalculatorView} from "./Calculator.view";
import {Bond} from "../../../../common/types";
import {AppState} from "../../../../store";
import {
    setInstrumentNumberInPortfolio,
    initializeBonds,
    removeInstrumentFromPortfolio,
    changeInstrumentToAddIdInput,
    changeInstrumentToAddNumberInput,
    openAddInstrumentModal,
    closeAddInstrumentModal
} from "../../../../store/Calculator/Calculator.actions";
import {connect} from "react-redux";

type CalculatorState = {
    bonds: { [instrumentId: string]: Bond }
    portfolio: { [instrumentId: number]: number }
    addInstrumentModalIsShown: boolean,

    instrumentToAddId: string,
    instrumentToAddNumber: number
};

type CalculatorDispatch = {
    initializeBonds: typeof initializeBonds,
    setInstrumentNumberInPortfolio: typeof setInstrumentNumberInPortfolio,
    removeInstrumentFromPortfolio: typeof removeInstrumentFromPortfolio,
    changeInstrumentToAddIdInput: typeof changeInstrumentToAddIdInput,
    changeInstrumentToAddNumberInput: typeof changeInstrumentToAddNumberInput,
    openAddInstrumentModal: typeof openAddInstrumentModal,
    closeAddInstrumentModal: typeof closeAddInstrumentModal
};

export type CalculatorProps = CalculatorState & CalculatorDispatch;

const Calculator: React.FC<CalculatorProps> = (props) => {
    useEffect(() => {
        let bonds = require('../../../../data/bonds.json');
        props.initializeBonds(bonds
            .map(bond => Bond.deserialize(bond))
            .reduce(function (map: { [instrumentId: string]: Bond }, bond: Bond) {
                map[bond.instrumentId] = bond;
                return map;
            }, {}));
    }, []);

    return <CalculatorView {...props} />
}

const mapStateToProps = (state: AppState): CalculatorState => {
    const {bonds, portfolio, addInstrumentModalIsShown, instrumentToAddId, instrumentToAddNumber} = state.calculator;

    return {bonds, portfolio, addInstrumentModalIsShown, instrumentToAddId, instrumentToAddNumber};
}

const mapDispatchToProps: CalculatorDispatch = {
    initializeBonds: initializeBonds,
    setInstrumentNumberInPortfolio: setInstrumentNumberInPortfolio,
    removeInstrumentFromPortfolio: removeInstrumentFromPortfolio,
    changeInstrumentToAddIdInput: changeInstrumentToAddIdInput,
    changeInstrumentToAddNumberInput: changeInstrumentToAddNumberInput,
    openAddInstrumentModal: openAddInstrumentModal,
    closeAddInstrumentModal: closeAddInstrumentModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
