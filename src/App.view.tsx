import "./App.gstyle.css"

import React from "react"
import { TestingPage } from "./pages/TestingPage"

export const App = (): JSX.Element => (
    <div className="app">
        {/* todo: remove*/}
        <TestingPage />
    </div>
)
