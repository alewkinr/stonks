import styles from "./DepositingFunds.style.css";

import React from "react";
import { DepositingFundsProps } from "./DepositingFunds";
import { InfoTooltip } from "../../../../../../../../components/InfoTooltip"
import ContentEditable from "react-contenteditable";

export const DepositingFundsView: React.FC<DepositingFundsProps> = (props) => {
	return (
		<div className={styles.container} style={{ height: "50px" }}>
			<div className={styles.title}>{"Пополнения"}</div>
			<InfoTooltip text="Сумма ежемесячного пополнения вашего инвестиционного счета"></InfoTooltip>
			<ContentEditable className={styles.value}
				html={"30 000"}
				onChange={() => {}} />
		</div>
	);
}
