import styles from "./Portfolio.style.css";

import React, { useEffect } from "react";
import { PortfolioProps } from "./Portfolio";
import { InformationOnFunds } from "./childs/InformationOnFunds";
import { Bond } from "./childs/Bond";

import { Scrollbars } from "react-custom-scrollbars";

const filterBondsByInstrumentId = (bonds, _id: string) => {
    return bonds.filter(
        (bond, _id) => bond.instrumentId === _id
    )
}

// extractBondFromBondList - получаем объект бонда по его instrumentId
const extractBondFromBondList = (bonds, instrumentId) => {
    let res = filterBondsByInstrumentId(bonds, instrumentId);
    if (res.length === 0) {
        return {};
    };

    if (res.length === 1) {
        return res[0]
    }

    throw "duplicated bond in data";

};

export const PortfolioView: React.FC<PortfolioProps> = (props) => {
    const {
        bonds,
        portfolio,
        incrementInstrumentAmountInPortfolio,
        decrementInstrumentAmountInPortfolio,
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
                            let bond = extractBondFromBondList(bonds, instrumentId);

                            let { issuer, issuerImg } = bond;
                            return (
                                <Bond
                                    key={i}
                                    issuerTitle={issuer}
                                    logoUrl={issuerImg}
                                    amount={instrumentNumber}
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
