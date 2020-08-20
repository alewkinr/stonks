import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Settings } from "./pages/Settings";
import { RouteProps } from "react-router-dom";

export const routes = [
	{
		path: ["/", "/home"], // Главная страница
		component: Home,
		exact: true
	},
	{
		path: "/about",
		component: About,
		exact: true
	},
	{
		path: "/settings",
		component: Settings,
		exact: true
	}
] as RouteProps[];
