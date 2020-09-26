import styles from "./InfoTooltip.style.css";
import { InfoTooltipProps } from "./InfoTooltip"

import React from "react";
import { withStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const HtmlTooltip = withStyles((theme: Theme) => ({
	tooltip: {
		backgroundColor: '#f5f5f9',
		color: 'rgba(0, 0, 0, 0.87)',
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: '1px solid #dadde9',
	},
}))(Tooltip);

const absoluteStyles: React.CSSProperties = {
	position: "absolute",
	top: "10px",
	right: "10px",
};

export const InfoTooltipView: React.FC<InfoTooltipProps> = (props) => {
	const {text, interactive, absolute} = props;

	return (
		<div className={styles.container} style={absolute ? absoluteStyles : null}>
			<HtmlTooltip interactive={interactive} title={<div dangerouslySetInnerHTML={{ __html: text }} />}>
				<div className={styles.info} />
			</HtmlTooltip>
		</div>
	);
}
