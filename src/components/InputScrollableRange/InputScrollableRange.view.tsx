import styles from "./InputScrollableRange.style.css";

import React from "react";
import { InputScrollableRangeProps } from "./InputScrollableRange";
import { Label } from "../Label";

export const InputScrollableRangeView: React.FC<InputScrollableRangeProps> = (props) => {
	const {value} = props;

	const {onChange} = props;

	return (
		<div className={styles.container}>
			<div className={styles.range}>
				<input type="text"
					className={styles.input}
					value={value}
					onChange={onChange} />
				<div className={styles.line} />
				<div className={styles.handle} />
			</div>
			<Label name="Исходнная сумма" />
		</div>
	);
}
