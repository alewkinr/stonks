import styles from "./Bond.style.css";
import React from "react";
import { BondProps } from "./Bond";

export const BondView: React.FC<BondProps> = (props) => {
	const { issuerTitle, logoUrl, amount, fullPrice } = props;

	const { onIncrement, onDecrement } = props;

	return (
		<div className={styles.container}>
			<div className={styles.basic}>
				<div className={styles.left}>
					<img className={styles.image} src={logoUrl} />
					<div className={styles.title}>{issuerTitle}</div>
				</div>
				<div className={styles.right}>
					<div className={styles.count}>
						<div
							className={`${styles.control} ${styles.minus}`}
							onClick={() => { onDecrement() }} />

						<span>{`${amount} шт.`}</span>

						<div
							className={`${styles.control} ${styles.plus}`}
							onClick={() => { onIncrement() }}
						/>
					</div>
					<div className={styles.fullPrice}>{fullPrice}</div>
				</div>
			</div>
			{
				// probably required in the future. todo:
				/* 			{opened ? <div className={styles.devider} /> : null}
						{opened ? (
							<div className={styles.secondary}>
								<div className={styles.maturityDate}>{"до 22.07.2021"}</div>
								<div className={styles.percent}>{"11,55% годовых"}</div>
							</div>
						) : null}
					</div>
				);
			} */
			}
		</div>
	)
}
