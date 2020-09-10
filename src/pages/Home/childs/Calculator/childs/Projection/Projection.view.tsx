	import styles from "./Projection.style.css";

	import React from "react";
	import { ProjectionProps } from "./Projection";
	import { Cash } from "../../../../../../components/Cash";
	import { Profit } from "../../../../../../components/Profit";
	import { Label } from "../../../../../../components/Label";
	import { Calendar } from "../../../../../../components/Calendar";

export const ProjectionView: React.FC<ProjectionProps> = (props) => {
	const { endDate, totalAmount, profitPercent, profitAmount } = props;

	const { setEndDate } = props;

	return (
		<div className={styles.container}>
			<div className={styles.containerRow}>
				<div className={styles.title}>{"Прогноз"}</div>
				<Calendar endDate={endDate} />
			</div>
			<div className={styles.containerRow}>
				<div className={styles.item}>
					<Cash value={totalAmount} currency="ruble" />
					<Label name="Итоговая сумма"
						description="Сумма вложенных средств со всеми пополнениями" />
				</div>
				<div className={`${styles.item} ${styles.profit}`}>
					<Profit value={profitAmount}
						currency="ruble"
						percent={profitPercent} />
					<Label name="Прибыль"
						description="Чистая прибыль при данных вложениях" />
				</div>
			</div>
		</div>
	);
};
