import logo from "./contents/icon.image.gif";

import "./Home.style.css";

import React from "react";

export const HomeView = (): JSX.Element => <div className="home_container">
	<img className="home_container__image" src={logo} alt="" />
	<div className="home_container__bonjour">
		{"Добро пожаловать на основную страницу Web-клиента!!!"}
	</div>
</div>;
