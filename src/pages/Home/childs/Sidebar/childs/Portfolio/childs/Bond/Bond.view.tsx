import styles from "./Bond.style.css";

import React, { useState } from "react";
import { BondProps } from "./Bond";
import { incrementInstrumentAmountInPortfolio } from "../../../../../../../../store/Portfolio/Portfolio.actions";

export const BondView: React.FC<BondProps> = (props) => {
	const { issuerTitle, logoUrl, amount } = props;
	const [opened, setOpened] = useState(false);

	return (
		<div className={styles.container}>
			<div className={styles.basic}>
				<div className={styles.left} onClick={() => setOpened(!opened)}>
					<img className={styles.image} src={logoUrl} />
					<div className={styles.title}>{issuerTitle}</div>
				</div>
				<div className={styles.right}>
					<div className={styles.count}>
						<div className={`${styles.control} ${styles.minus}`} />
						<span>{`${amount} шт.`}</span>
						<div className={`${styles.control} ${styles.plus}`}
							onClick={() => { incrementInstrumentAmountInPortfolio() }}
						/>
					</div>
					<div className={styles.fullPrice}>{"32 487"}</div>
				</div>
			</div>
			{opened ? <div className={styles.devider} /> : null}
			{opened ? (
				<div className={styles.secondary}>
					<div className={styles.maturityDate}>{"до 22.07.2021"}</div>
					<div className={styles.percent}>{"11,55% годовых"}</div>
				</div>
			) : null}
		</div>
	);
}
