import "./SocialButton.style.css";

import React, { Component } from "react";

export interface ISocialButtonProps {
	iconSrc: string;
	label: string;
	type: "react" | "mobx" | "redux";
	link: string;
}

export class SocialButtonView extends Component<ISocialButtonProps> {
	private _props: ISocialButtonProps;

	constructor(props: ISocialButtonProps) {
		super(props);

		this._props = props;
	}

	render(): JSX.Element {
		const { type, link, iconSrc, label } = this._props;

		return (
			<a className={`social_button ${type}`} href={link} target="_blank" rel="noopener noreferrer">
				<div className="social_button__icon_container">
					<img className="social_button__icon" src={iconSrc} alt="social_button_icon"></img>
				</div>
				<div className="social_button__label">{label}</div>
			</a>
		);
	}
}