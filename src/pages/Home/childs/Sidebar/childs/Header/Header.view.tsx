import styles from "./Header.style.css";

import React from "react";
import { HeaderProps } from "./Header";
import { AccountType } from "./childs/AccountType";

export const HeaderView: React.FC<HeaderProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<span>Мой счет</span>
				<div className={styles.info}></div>
			</div>
			<AccountType />
		</div>
	);
}
