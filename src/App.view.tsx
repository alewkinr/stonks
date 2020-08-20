import "./App.style.css";

import React from "react";
import { routes } from "./Routes";
import { HashRouter as Router, Route, RouteProps } from "react-router-dom";

export const App = (): JSX.Element => <div className="app">
	<Router hashType="noslash" >
		{routes.map((route: RouteProps) => <Route key={route.path as string} {...route} />)}
	</Router>
</div>;
