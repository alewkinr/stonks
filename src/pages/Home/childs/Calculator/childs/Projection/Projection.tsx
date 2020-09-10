import React from "react";
import { connect } from "react-redux";
import { ProjectionView } from "./Projection.view";
import { setEndDate } from "../../../../../../store/Projection/Projection.actions";
import { AppState } from "../../../../../../store";

type ProjectionState = {
	endDate?: Date;
	totalAmount?: string;
	profitAmount?: string;
	profitPercent?: string;
};

type ProjectionDispatch = {
	setEndDate?: typeof setEndDate;
};

export type ProjectionProps = ProjectionState & ProjectionDispatch;

const Projection: React.FC<ProjectionProps> = (props) => {
	return <ProjectionView {...props} />;
};

const mapStateToProps = (state: AppState): ProjectionState => {
	const {endDate, totalAmount, profitAmount, profitPercent} = state.projection;

	return { endDate, totalAmount, profitAmount, profitPercent };
};

const mapDispatchToProps: ProjectionDispatch = {
	setEndDate: setEndDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projection);
