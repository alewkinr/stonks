import styles from "./Account.style.css";

import React from "react";
import { AccountProps } from "./Account";
import { Cash } from "../../../../../../components/Cash";
import { Label } from "../../../../../../components/Label";
import { convertToFormat } from "./handlers/ConvertToFormat";

export const AccountView: React.FC<AccountProps> = (props) => {
	const {isIndividualInvestmentAccount, originAmount} = props;

	const {setIsIndividualInvestmentAccount, setOriginAmount} = props;

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.title}>{"Мой счет"}</div>
			</div>
			<div className={styles.information}>
				<div className={styles.item}>
					<Cash value="1 783 967" currency="ruble" />
					<Label name="Используемые средства" />
				</div>
				<div className={styles.item}>
					<Cash value="1 783 967" currency="ruble" />
					<Label name="Доступные средства" />
				</div>
			</div>
		</div>
	);
}
