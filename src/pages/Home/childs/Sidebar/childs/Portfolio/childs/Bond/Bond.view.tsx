import styles from "./Bond.style.css";

import React, { useState } from "react";
import { BondProps } from "./Bond";
import tinkoff from "./contents/tinkoff.png";

export const BondView: React.FC<BondProps> = (props) => {
	const [opened, setOpened] = useState(false);

	return (
		<div className={styles.container} onClick={() => setOpened(!opened)}>
			<div className={styles.basic}>
				<div className={styles.left}>
					<img className={styles.image} src={tinkoff} />
					<div className={styles.title}>{"Тинькофф1R"}</div>
				</div>
				<div className={styles.right}>
					<div className={styles.count}>{"100 шт."}</div>
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
