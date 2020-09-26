import styles from "./DepositingFunds.style.css";

import React from "react";
import { DepositingFundsProps } from "./DepositingFunds";
import { InfoTooltip } from "../../../../../../../../components/InfoTooltip";
import { convertToFormat } from "./handlers/ConvertToFormat";
import { Slider } from "../../../../../../../../components/Slider";

export const DepositingFundsView: React.FC<DepositingFundsProps> = (props) => {
    const SLIDER_MAX = 100000;
	const SLIDER_MIN = 0;
    const SLIDER_STEP = 10000;
    
    const {depositFunds, setDepositingFunds} = props;

    return (
        <div className={styles.container}>
            <div className={styles.title}>{"Пополнения"}</div>
            <InfoTooltip absolute text="Сумма ежемесячного пополнения вашего инвестиционного счета" />
            <div className={styles.value}>{convertToFormat(depositFunds)}</div>
            <Slider marks
				defaultValue={Number.parseInt(depositFunds)}
				value={Number.parseInt(depositFunds.replace(/ /gm, ""))}
				step={SLIDER_STEP}
				min={SLIDER_MIN}
				max={SLIDER_MAX}
				onChange={(_, value: number) => setDepositingFunds(value.toString())} />
        </div>
    );
};
