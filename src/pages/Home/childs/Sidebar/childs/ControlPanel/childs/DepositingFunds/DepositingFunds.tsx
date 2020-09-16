import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../../../../../../store";
import { setDepositingFunds } from "../../../../../../../../store/Account/Account.actions";
import { DepositingFundsView } from "./DepositingFunds.view";

type DepositingFundsState = {
    depositFunds: string;
};

type DepositingFundsDispatch = {
    setDepositingFunds: typeof setDepositingFunds;
};

export type DepositingFundsProps = DepositingFundsState & DepositingFundsDispatch;

const DepositingFunds: React.FC<DepositingFundsProps> = (props) => {
    return <DepositingFundsView {...props} />;
};

const mapStateToProps = (state: AppState): DepositingFundsState => {
    const { depositingFunds: depositFunds } = state.account;

    return { depositFunds };
};

const mapDispatchToProps: DepositingFundsDispatch = {
    setDepositingFunds,
};

export default connect(mapStateToProps, mapDispatchToProps)(DepositingFunds);
