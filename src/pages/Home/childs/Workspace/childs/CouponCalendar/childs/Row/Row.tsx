import React from "react";
import { RowView } from "./Row.view";

type RowState = {
    /* your states */
};

export type RowProps = RowState;

export const Row: React.FC<RowProps> = (props) => {
    return <RowView {...props} />;
};
