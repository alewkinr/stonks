import styles from "./OriginalAmount.style.css";

import React, { useState } from "react";
import { OriginalAmountProps } from "./OriginalAmount";
import { InfoTooltip } from "../../../../../../../../components/InfoTooltip"
import ContentEditable from "react-contenteditable";
import { convertToFormat } from "./handlers/ConvertToFormat";
import { Slider } from "../../../../../../../../components/Slider";

export const OriginalAmountView: React.FC<OriginalAmountProps> = (props) => {
	const {originAmount, setOriginalAmount} = props;

	return (
		<div className={styles.container}>
			<div className={styles.title}>{"Капитал"}</div>
			<InfoTooltip absolute text="Сумма, которую вы готовы вложить в момент открытия счета." />
			<ContentEditable className={styles.value}
				html={convertToFormat(originAmount)}
				onChange={e => setOriginalAmount(e.target.value)} />
			<Slider step={10} />
		</div>
	);
}
