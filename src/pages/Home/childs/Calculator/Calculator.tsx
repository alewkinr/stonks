import React, { useEffect } from "react";
import {CalculatorView} from "./Calculator.view";
import {Bond} from "../../../../common/types";
import {AppState} from "../../../../store";
import {initializeBonds} from "../../../../store/Calculator/Calculator.actions";
import {connect} from "react-redux";

type CalculatorState = {
    bonds: Array<Bond>
};

type CalculatorDispatch = {
    initializeBonds: typeof initializeBonds,
};

export type CalculatorProps = CalculatorState & CalculatorDispatch;

const Calculator: React.FC<CalculatorProps> = (props) => {
    useEffect(() => {
        let bonds = require('../../../../data/bonds.json');
        
        props.initializeBonds(bonds.map(bond => Bond.deserialize(bond)));
    }, []);

    return <CalculatorView {...props} />
}

const mapStateToProps = (state: AppState): CalculatorState => {
    const {bonds} = state.calculator;

    return {bonds};
}

const mapDispatchToProps: CalculatorDispatch = {
    initializeBonds: initializeBonds,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
