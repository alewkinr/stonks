import React from "react";
import { connect } from "react-redux";
import { AccountType as Type } from "../../../../../../../../enums/AccountType";
import { AppState } from "../../../../../../../../store";
import { setAccountType } from "../../../../../../../../store/Account/Account.actions";
import { AccountTypeView } from "./AccountType.view";

type AccountTypeState = {
	accountType: Type;
};

type AccountTypeDispatch = {
	setAccountType: typeof setAccountType;
};

export type AccountTypeProps = AccountTypeState & AccountTypeDispatch;

const AccountType: React.FC<AccountTypeProps> = (props) => {
	return <AccountTypeView {...props} />
}

const mapStateToProps = (state: AppState): AccountTypeState => {
	const {accountType} = state.account;

	return {accountType};
}

const mapDispatchToProps: AccountTypeDispatch = {
	setAccountType,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountType);
