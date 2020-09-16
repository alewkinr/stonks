import styles from "./DepositingFunds.style.css";

import React from "react";
import { DepositingFundsProps } from "./DepositingFunds";
import { InfoTooltip } from "../../../../../../../../components/InfoTooltip";
import ContentEditable from "react-contenteditable";
import { convertToFormat } from "./handlers/ConvertToFormat";
import { Slider } from "../../../../../../../../components/Slider";

export const DepositingFundsView: React.FC<DepositingFundsProps> = (props) => {
    const { depositFunds, setDepositingFunds } = props;

    console.log(typeof setDepositingFunds);
    return (
        <div className={styles.container}>
            <div className={styles.title}>{"Пополнения"}</div>
            <InfoTooltip absolute text="Сумма ежемесячного пополнения вашего инвестиционного счета" />
            <ContentEditable
                className={styles.value}
                html={convertToFormat(depositFunds)}
                onChange={(e) => setDepositingFunds(e.target.value)} />
            <Slider step={10} />
        </div>
    );
};
