import styles from "./AccountType.style.css";

import React, { useState } from "react";
import { AccountTypeProps } from "./AccountType";
import { AccountType } from "../../../../../../../../enums/AccountType";

export const AccountTypeView: React.FC<AccountTypeProps> = (props) => {
	const {accountType} = props;

	const {setAccountType} = props;

	return (
		<div className={`${styles.container} ${styles[accountType]}`} >
			<div className={styles.type} onClick={() => setAccountType(AccountType.BROKER)}>БС</div>
			<div className={styles.type} onClick={() => setAccountType(AccountType.INDIVIDUAL_INVESTMENT)}>ИИС</div>
		</div>
	);
}
