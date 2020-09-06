import styles from "./Calculator.style.css";

import React from "react";
import {CalculatorProps} from "./Calculator";
import {Bond} from "../../../../common/types";

export class CalculatorView extends React.Component<CalculatorProps> {

    constructor(props) {
        super(props);

        let bonds = require('../../../../data/bonds.json');
        props.initializeBonds(bonds.map(bond => Bond.deserialize(bond)))
    }

    render = () => (
        <div className={styles.container}>
            <h1>{"Calculator"}</h1>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>InstrumentId</th>
                        <th>Issuer</th>
                        <th>Notional</th>
                        <th>Maturity Date</th>
                        <th>Coupon</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.bonds.map((bond, i) => {
                        return (
                            <tr key={i}>
                                <td>{bond.instrumentId}</td>
                                <td>{bond.issuer}</td>
                                <td>{bond.notional}</td>
                                <td>{bond.maturityDate}</td>
                                <td>{bond.couponPercentage} %</td>
                            </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
