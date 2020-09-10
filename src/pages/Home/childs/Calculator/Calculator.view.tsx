import styles from "./Calculator.style.css";

import React from "react";
import {CalculatorProps} from "./Calculator";
import {Account} from "./childs/Account";
import {Projection} from "./childs/Projection";
import addButton from "./Contents/add-button.svg";
import Modal from "react-modal";

const modalStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

export const CalculatorView: React.FC<CalculatorProps> = (props) => {
    const {
        bonds,
        portfolio,
        addInstrumentModalIsShown,
        instrumentToAddId,
        instrumentToAddNumber,

        openAddInstrumentModal,
        closeAddInstrumentModal,
        setInstrumentNumberInPortfolio,
        changeInstrumentToAddIdInput,
        changeInstrumentToAddNumberInput,
    } = props;

    return (
        <div className={styles.container}>
            <div className={styles.account}>
                <Account/>
            </div>
            <div className={styles.forecast}>
                <Projection/>
            </div>
            <div className={styles.workspace}>
                <div className={styles.container}>
                    <h1>Портфель</h1>
                    <input type="image"
                           src={addButton}
                           width={20}
                           alt={"Добавить инструмент"}
                           onClick={openAddInstrumentModal}/>
                    <Modal isOpen={addInstrumentModalIsShown}
                           style={modalStyles}
                    >
                        <input type="text"
                               name="instrumentId"
                               value={instrumentToAddId}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                   changeInstrumentToAddIdInput(e.target.value);
                               }}/>
                        <input type="text"
                               name="count"
                               value={instrumentToAddNumber}
                               onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                   changeInstrumentToAddNumberInput(e.target.value);
                               }}/>
                        <button onClick={closeAddInstrumentModal}>close</button>
                        <button onClick={() => setInstrumentNumberInPortfolio(instrumentToAddId, instrumentToAddNumber)}>
                            add/delete instrument
                        </button>
                    </Modal>
                </div>
                <div>
                    <table style={{width: "100%"}}>
                        <thead>
                        <tr>
                            <th style={{textAlign: "left", fontWeight: "bold"}}>InstrumentId</th>
                            <th style={{textAlign: "left", fontWeight: "bold"}}>Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(portfolio)
                            .map((instrumentId, i) => {
                                let instrumentNumber = portfolio[instrumentId];
                                //let bond = bonds[instrumentId];

                                return (
                                    <tr key={i}>
                                        <td>{instrumentId}</td>
                                        <td>{instrumentNumber}</td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <br/>
            <div className={styles.workspace}>
                <h1>{"Calculator"}</h1>
                <div>
                    <table style={{width: "100%"}}>
                        <thead>
                        <tr>
                            <th style={{textAlign: "left", fontWeight: "bold"}}>InstrumentId</th>
                            <th style={{textAlign: "left", fontWeight: "bold"}}>Issuer</th>
                            <th style={{textAlign: "left", fontWeight: "bold"}}>Bond</th>
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
                                        <td>{bond.name}</td>
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
