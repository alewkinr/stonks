import styles from "./Calculator.style.css"

import React, { Component } from "react"
import { CalculatorProps } from "./Calculator"

export class CalculatorView extends Component<React.FC<CalculatorProps>> {
    constructor(props) {
        super(props)

        const bonds = require("../../../../data/bonds.json")
        props.initializeBonds(bonds)
    }

    render = () => <div className={styles.container}></div>
}
