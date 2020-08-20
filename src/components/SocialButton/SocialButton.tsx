import React, { PureComponent } from "react";
import { SocialButtonView, ISocialButtonProps } from "./SocialButton.view";

export class SocialButton extends PureComponent<ISocialButtonProps> {
	private _props: ISocialButtonProps;

	constructor(props: ISocialButtonProps) {
		super(props);

		this._props = props;
	}

	render(): JSX.Element {
		return <SocialButtonView {...this._props} />;
	}
}
