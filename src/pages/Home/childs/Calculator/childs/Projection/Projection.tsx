import React from "react";
import { ProjectionView } from "./Projection.view";

type ProjectionState = {};

export type ProjectionProps = ProjectionState;

export const Projection: React.FC<ProjectionProps> = (props) => {
  return <ProjectionView {...props} />;
};
