import styles from "./AccountType.style.css";

import React, { useState } from "react";
import { AccountTypeProps } from "./AccountType";

// TODO: Сделать вывод типа из общего состояния.
export const AccountTypeView: React.FC<AccountTypeProps> = (props) => {
	const [accountType, setAccountType] = useState<"iia" | "second">("iia");

	return (
		<div className={`${styles.container} ${styles[accountType]}`}
			onClick={() => setAccountType(accountType === "iia" ? "second" : "iia")}>
			<div className={styles.accountType}>БС</div>
			<div className={styles.accountType}>ИИС</div>
		</div>
	);
}
