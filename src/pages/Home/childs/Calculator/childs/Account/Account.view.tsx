import styles from "./Account.style.css";

import React from "react";
import { AccountProps } from "./Account";
import { Toggle } from "../../../../../../components/Toggle";
import { InputScrollableRange } from "../../../../../../components/InputScrollableRange";
import { Cash } from "../../../../../../components/Cash";
import { Label } from "../../../../../../components/Label";

export const AccountView: React.FC<AccountProps> = (props) => {
	const {isIndividualInvestmentAccount, originAmount} = props;

	const {setIsIndividualInvestmentAccount, setOriginAmount} = props;

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.title}>{"Мой счет"}</div>
				<Toggle title="ИИС"
					isChecked={isIndividualInvestmentAccount}
					onChange={() => setIsIndividualInvestmentAccount(!isIndividualInvestmentAccount)} />
			</div>
			<InputScrollableRange value={originAmount}
				onChange={e => {
					let value = e.currentTarget.value;
					value = value.replace(/\s/gm, "");
					const format = new Intl.NumberFormat("ru").format(Number.parseInt(value));
					value = format === "не число" ? "" : format;
					setOriginAmount(value)
				}} />
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
