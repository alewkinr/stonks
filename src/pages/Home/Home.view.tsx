import logo from "./contents/icon.image.gif";
import reactIcon from "./contents/react.image.svg";
import mobxIcon from "./contents/mobx.image.png";
import reduxIcon from "./contents/redux.image.svg";

import "./Home.style.css";

import React from "react";
import { SocialButton } from "../../components/SocialButton/index";

export const HomeView = (): JSX.Element => <div className="home_container">
	<div className="home_container__socials">
		<SocialButton type="react" iconSrc={reactIcon} label="React" link="https://ru.reactjs.org/docs/getting-started.html" />
		<SocialButton type="redux" iconSrc={reduxIcon} label="Redux" link="https://redux.js.org/" />
		<SocialButton type="mobx" iconSrc={mobxIcon} label="MobX" link="https://mobx.js.org/" />
	</div>
	<img className="home_container__image" src={logo} alt="" />
	<div className="home_container__bonjour">
		{"Добро пожаловать на основную страницу Web-клиента!!!"}
	</div>
</div>;
