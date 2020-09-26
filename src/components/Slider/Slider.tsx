import { SliderProps, SliderTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import { SliderView } from "./Slider.view";

export const Slider: OverridableComponent<SliderTypeMap> = (props) => {
	return <SliderView {...props} />
}
