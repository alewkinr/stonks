import styles from "./Slider.style.css";

import React from "react";
import { SliderProps } from "./Slider";
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const CustomSlider = withStyles({
	root: {
		color: '#E35709',
		width: "calc(100% - 5px)",
		padding: "10px 0 2px 0",
		height: 1,
	},
	thumb: {
		width: 13,
		height: 13,
		backgroundColor: '#E35709',
		marginTop: "-6px",
		marginLeft: "-4px",
		"&:focus, &:hover, &$active": {
			boxShadow: "inherit"
		}
	},
	active: {},
	track: {
		height: "1px",
	},
	rail: {
		height: 1,
		opacity: 1,
		backgroundColor: '#DCDCDC',
	},
	mark: {
		backgroundColor: '#DCDCDC',
		width: "5px",
		height: "5px",
		borderRadius: "3px",
		marginTop: "-2px",
	},
	markActive: {
		backgroundColor: 'currentColor',
	},
})(Slider);

export const SliderView: React.FC<SliderProps> = (props) => {
	const {step} = props;

	return (
		<div className={styles.container}>
			<CustomSlider marks step={step} />
		</div>
	);
}
