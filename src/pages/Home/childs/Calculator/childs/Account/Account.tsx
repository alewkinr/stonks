import React from "react";
import { connect } from "react-redux";
import { AccountView } from "./Account.view";
import { setIsIndividualInvestmentAccount, setOriginAmount } from "../../../../../../store/Account/Account.actions";
import { AppState } from "../../../../../../store";

type AccountState = {
	isIndividualInvestmentAccount: boolean;
	originAmount: string;
};

type AccountDispatch = {
	setIsIndividualInvestmentAccount: typeof setIsIndividualInvestmentAccount;
	setOriginAmount: typeof setOriginAmount;
};

export type AccountProps = AccountState & AccountDispatch;

const Account: React.FC<AccountProps> = (props) => {
	return <AccountView {...props} />
}

const mapStateToProps = (state: AppState): AccountState => {
	const {isIndividualInvestmentAccount, originAmount} = state.account;

	return {isIndividualInvestmentAccount, originAmount};
}

const mapDispatchToProps: AccountDispatch = {
	setIsIndividualInvestmentAccount,
	setOriginAmount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
