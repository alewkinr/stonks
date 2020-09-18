import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../../../../../../store";
import { setOriginalAmount } from "../../../../../../../../store/Account/Account.actions";
import { OriginalAmountView } from "./OriginalAmount.view";

type OriginalAmountState = {
    originAmount: string;
};

type OriginalAmountDispatch = {
    setOriginalAmount: typeof setOriginalAmount;
};

export type OriginalAmountProps = OriginalAmountState & OriginalAmountDispatch;

const OriginalAmount: React.FC<OriginalAmountProps> = (props) => {
    return <OriginalAmountView {...props} />;
};

const mapStateToProps = (state: AppState): OriginalAmountState => {
    const { originalAmount: originAmount } = state.account;
    const { bonds, portfolio } = state.portfolio;

    return { originAmount };
};

const mapDispatchToProps: OriginalAmountDispatch = {
    setOriginalAmount,
};

export const checkSums = (sum: number) => {};

export default connect(mapStateToProps, mapDispatchToProps)(OriginalAmount);
