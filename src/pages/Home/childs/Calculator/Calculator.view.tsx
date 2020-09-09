import styles from "./Calculator.style.css";

import React from "react";
import { CalculatorProps } from "./Calculator";
import { Account } from "./childs/Account";

export const CalculatorView: React.FC<CalculatorProps> = (props) => {
    const {bonds} = props;

	return (
		<div className={styles.container}>
			<div className={styles.account}>
				<Account />
			</div>
			<div className={styles.forecast}> </div>
            <div className={styles.workspace}>
                <h1>{"Calculator"}</h1>
                <div>
                    <table style={{width: "100%"}}>
                        <thead>
                        <tr>
                            <th style={{textAlign: "left", fontWeight: "bold"}}>InstrumentId</th>
                            <th style={{textAlign: "left", fontWeight: "bold"}}>Issuer</th>
                            <th style={{textAlign: "left", fontWeight: "bold"}}>Notional</th>
                            <th style={{textAlign: "left", fontWeight: "bold"}}>Maturity Date</th>
                            <th style={{textAlign: "left", fontWeight: "bold"}}>Coupon</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.values(bonds)
                            .map((bond, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{bond.instrumentId}</td>
                                        <td>{bond.issuer}</td>
                                        <td>{bond.notional}</td>
                                        <td>{bond.maturityDate}</td>
                                        <td>{bond.couponAnnualPercent} %</td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
		</div>
	);
}
