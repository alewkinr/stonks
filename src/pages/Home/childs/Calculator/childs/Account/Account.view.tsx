import styles from "./Account.style.css";

import React from "react";
import { AccountProps } from "./Account";
import { Toggle } from "../../../../../../components/Toggle";
import { InputWithScrollableRange } from "../../../../../../components/InputWithScrollableRange";
import { Cash } from "../../../../../../components/Cash";
import { Label } from "../../../../../../components/Label";

export const AccountView: React.FC<AccountProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.title}>{"Мой счет"}</div>
				<Toggle title="ИИС" />
			</div>
			<InputWithScrollableRange />
			<div className={styles.information}>
				<div className={styles.item}>
					<Cash value="1 783 967" currency="ruble" />
					<Label />
				</div>
				<div className={styles.item}>
					<Cash value="1 783 967" currency="ruble" />
					<Label />
				</div>
			</div>
		</div>
	);
}
