import { Keys } from "./Calculator.keys";

/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const yourAction = () => {
	return {
		// type: Keys.YOUR_KEY,
	} as const;
}
