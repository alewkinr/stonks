import styles from "./TestingPage.style.css"
import { Bond } from "../../components/Bond"
import React from "react"
import { TestingPageProps } from "./TestingPage"

export const TestingPageView: React.FC<TestingPageProps> = (props) => {
    return (
        <div className={styles.container}>
            <Bond />
        </div>
    )
}
