import styles from "./Header.style.css";

import React from "react";
import { HeaderProps } from "./Header";
import { Button } from "../../../../components/Button";

export const HeaderView: React.FC<HeaderProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.brand} />
				<div className={styles.controls}>
					<Button name="Открыть счет" type="positive" />
				</div>
			</div>
		</div>
	);
}
