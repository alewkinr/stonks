import styles from "./OriginalAmount.style.css";

import React, { useState } from "react";
import { OriginalAmountProps } from "./OriginalAmount";
import { InfoTooltip } from "../../../../../../../../components/InfoTooltip"
import ContentEditable from "react-contenteditable";
import { convertToFormat } from "./handlers/ConvertToFormat";
import { Slider } from "../../../../../../../../components/Slider";

export const OriginalAmountView: React.FC<OriginalAmountProps> = (props) => {
	const SLIDER_MAX = 4000000;
	const SLIDER_MIN = 100000;
	const SLIDER_STEP = 300000;

	const {originAmount, setOriginalAmount} = props;

	return (
		<div className={styles.container}>
			<div className={styles.title}>{"Капитал"}</div>
			<InfoTooltip absolute text="Сумма, которую вы готовы вложить в момент открытия счета." />
			<ContentEditable className={styles.value}
				html={convertToFormat(originAmount)}
				onChange={e => setOriginalAmount(e.target.value)} />
			<Slider marks
				value={Number.parseInt(originAmount)}
				step={SLIDER_STEP}
				min={SLIDER_MIN}
				max={SLIDER_MAX}
				onChange={(_, value: number) => setOriginalAmount(value.toString())} />
		</div>
	);
}
