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
				<InfoTooltip interactive text="БС — обычный брокерский счет <br/>
				ИИС — брокерский счёт с налоговыми льготами и рядом
				<a href='https://broker.ru/whats-iis' target='_blank'>ограничений</a>" />
			</div>
			<AccountType />
		</div>
	);
}
