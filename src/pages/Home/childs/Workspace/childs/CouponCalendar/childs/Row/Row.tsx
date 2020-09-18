import React from "react";
import { RowView } from "./Row.view";

type RowState = {
    date: string;
    bondName: string;
    sum: string;
    issuerLogoUrl: string;
};

export type RowProps = RowState;

export const Row: React.FC<RowProps> = (props) => {
    return <RowView {...props} />;
};
