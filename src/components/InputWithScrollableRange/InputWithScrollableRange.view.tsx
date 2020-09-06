import styles from "./InputWithScrollableRange.style.css";

import React from "react";
import { InputWithScrollableRangeProps } from "./InputWithScrollableRange";
import { Label } from "../Label";

export const InputWithScrollableRangeView: React.FC<InputWithScrollableRangeProps> = () => {
	return (
		<div className={styles.container}>
			<div className={styles.range}>
				<input type="text" className={styles.input} />
				<div className={styles.line} />
				<div className={styles.handle} />
			</div>
			<Label name="Исходнная сумма" />
		</div>
	);
}
