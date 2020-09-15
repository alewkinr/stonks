import styles from "./Portfolio.style.css";

import React, { useEffect } from "react";
import { PortfolioProps } from "./Portfolio";
import { InformationOnFunds } from "./childs/InformationOnFunds";
import { Bond } from "./childs/Bond";

import { Scrollbars } from "react-custom-scrollbars";

// extractBondFromBondList - получаем объект бонда по его instrumentId
const extractBondFromBondList = (bonds, instrumentId) => {
    return bonds[instrumentId]
};

export const PortfolioView: React.FC<PortfolioProps> = (props) => {
    const {
        bonds,
        portfolio,
        incrementInstrumentAmountInPortfolio,
        decrementInstrumentAmountInPortfolio,
        setInstrumentNumberInPortfolio,
    } = props;


    return (
        <div className={styles.container}>
            <div className={styles.containerRow}>
                <div className={styles.label}>{"Состав портфеля"}</div>
            </div>
            <InformationOnFunds />
            <Scrollbars autoHide style={{ width: "100%", height: "420px" }}>
                <div className={styles.bonds}>
                    {
                        Object.keys(portfolio).map((instrumentId, i) => {
                            let instrumentNumber = portfolio[instrumentId];
                            let { issuer, issuerImg } = extractBondFromBondList(bonds, instrumentId);

                            return (
                                <Bond
                                    key={i}
                                    portfolio={portfolio}
                                    issuerTitle={issuer}
                                    logoUrl={issuerImg}
                                    amount={instrumentNumber}
                                    onIncrement={incrementInstrumentAmountInPortfolio}
                                    onDecrement={decrementInstrumentAmountInPortfolio}
                                    onSetAount={setInstrumentNumberInPortfolio}
                                />
                            )
                        })
                    }
                </div>
            </Scrollbars>
        </div>
    );
};
