import React from "react";
import { SliderView } from "./Slider.view";

type SliderState = {
	step?: number;
};

export type SliderProps = SliderState;

export const Slider: React.FC<SliderProps> = (props) => {
	return <SliderView {...props} />
}
