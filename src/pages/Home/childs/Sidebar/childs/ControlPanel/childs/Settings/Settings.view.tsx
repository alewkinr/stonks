import styles from "./Settings.style.css";

import React, { useState } from "react";
import { SettingsProps } from "./Settings";
import { Toggle } from "../../../../../../../../components/Toggle";
import { InfoTooltip } from "../../../../../../../../components/InfoTooltip";

export const SettingsView: React.FC<SettingsProps> = (props) => {
    const { reinvestment, setReinvestment } = props;
    const [additionalPurchase, setAdditionalPurchase] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <span>{"Реинвестиции"}</span>
                    <InfoTooltip text="Режим реинвестирование позволяет увеличить стоимость вашего портфеля.<br/> При включении, робот будет автоматически расходовать накопленный <br/>доход в наиболее прибыльные облигации" />
                </div>
                <div className={styles.control}>
                    <Toggle
                        checked={reinvestment}
                        onChange={() => setReinvestment(!reinvestment)}
                    />
                </div>
            </div>
        </div>
    );
};
