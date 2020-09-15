import styles from "./InfoTooltip.style.css";
import { InfoTooltipProps } from "./InfoTooltip"

import React from "react";
import ReactTooltip from "react-tooltip";


export const InfoTooltipView: React.FC<InfoTooltipProps> = (props) => {
	const { text, type } = props;

	return (
		<div className={styles.container}>
			<div
				className={styles.info}
				data-tip={text}>
			</div>
			<ReactTooltip
				type="dark"
				html={true}
				place="right"
				effect="solid"
			/>
		</div>
	);
}
