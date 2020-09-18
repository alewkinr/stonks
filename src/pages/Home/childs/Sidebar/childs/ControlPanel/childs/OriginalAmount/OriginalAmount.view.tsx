import styles from "./OriginalAmount.style.css";

import React, { useState } from "react";
import { OriginalAmountProps } from "./OriginalAmount";
import { InfoTooltip } from "../../../../../../../../components/InfoTooltip";
import { convertToFormat } from "./handlers/ConvertToFormat";
import { Slider } from "../../../../../../../../components/Slider";

function getnearestSum(sum: number): number {
    let norm_sum = 100000;
    while (norm_sum < sum) norm_sum += 300000;
    return norm_sum;
}

export const OriginalAmountView: React.FC<OriginalAmountProps> = (props) => {
    const SLIDER_MAX = 2500000;
    const SLIDER_MIN = 100000;
    const SLIDER_STEP = 300000;

    const { originAmount, bondSum, setOriginalAmount } = props;

    if (bondSum > Number(originAmount)) {
        let norm_sum = 100000;
        while (norm_sum < bondSum) norm_sum += 300000;
        setOriginalAmount(norm_sum.toString());
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>{"Капитал"}</div>
            <InfoTooltip
                absolute
                text="Сумма, которую вы готовы вложить в момент открытия счета."
            />
            <div className={styles.value}>{convertToFormat(originAmount)}</div>
            <Slider
                marks
                value={Number.parseInt(originAmount)}
                step={SLIDER_STEP}
                min={SLIDER_MIN}
                max={SLIDER_MAX}
                onChange={(_, value: number) => {
                    if (value < bondSum)
                        setOriginalAmount(getnearestSum(bondSum).toString());
                    else setOriginalAmount(value.toString());
                }}
            />
        </div>
    );
};
