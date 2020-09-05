import React from "react"
import { TestingPageView } from "./TestingPage.view"

type TestingPageState = {
    /* your states */
}

export type TestingPageProps = TestingPageState

export const TestingPage: React.FC<TestingPageProps> = (props) => {
    return <TestingPageView {...props} />
}
