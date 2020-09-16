import styles from "./Portfolio.style.css";

import React, { useEffect } from "react";
import { PortfolioProps } from "./Portfolio";
import { InformationOnFunds } from "./childs/InformationOnFunds";
import { Bond } from "./childs/Bond";
import { Scrollbars } from "react-custom-scrollbars";

import { FindBondByInstrumentId } from "../../../../../../store/Portfolio/utils/Portfolio.utils"

export const PortfolioView: React.FC<PortfolioProps> = (props) => {
    const {
        bonds,
        portfolio,
        cost,
        incrementInstrumentAmountInPortfolio,
        decrementInstrumentAmountInPortfolio,
    } = props;

    return (
        <div className={styles.container}>
            <div className={styles.containerRow}>
                <div className={styles.label}>{"Состав портфеля"}</div>
            </div>
            <InformationOnFunds />
            <Scrollbars autoHide style={{ width: "100%", height: "350px" }}>
                <div className={styles.bonds}>
                    {
                        Object.keys(portfolio).map((instrumentId, i) => {
                            let instrumentCount = portfolio[instrumentId];
                            let bond = FindBondByInstrumentId(bonds, instrumentId);

                            let { issuer, issuerImg } = bond;

                            return (
                                <Bond
                                    key={i}
                                    issuerTitle={issuer}
                                    logoUrl={issuerImg}
                                    amount={instrumentCount}
                                    fullPrice={cost.get(instrumentId)}
                                    onIncrement={() => { incrementInstrumentAmountInPortfolio(instrumentId) }}
                                    onDecrement={() => { decrementInstrumentAmountInPortfolio(instrumentId) }}
                                // todo: finish set certain amount
                                /*  onSetAount={setInstrumentNumberInPortfolio} */
                                />
                            )
                        })
                    }
                </div>
            </Scrollbars>
        </div>
    );
};
