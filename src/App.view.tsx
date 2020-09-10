import "./App.gstyle.css"

import React from "react"
import { Home } from "./pages/Home"
import { Bond } from "./components/Bond"

export const App = (): JSX.Element => (
    <div className="app">
        <Home />
        <Bond />
    </div>
)
