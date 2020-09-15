import styles from "./Header.style.css";

import React from "react";
import { HeaderProps } from "./Header";
import { AccountType } from "./childs/AccountType";

import { InfoTooltip } from "../../../../../../components/InfoTooltip"

export const HeaderView: React.FC<HeaderProps> = (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<span>Мой счет</span>
				<InfoTooltip text="ИИС — брокерский счёт с налоговыми льготами и ряд 
				<a href='https://broker.ru/whats-iis'>ограничений</a>"></InfoTooltip>
			</div>
			<AccountType />
		</div>
	);
}
