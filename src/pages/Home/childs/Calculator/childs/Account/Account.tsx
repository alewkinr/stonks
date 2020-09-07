import React from "react";
import { connect } from "react-redux";
import { AccountView } from "./Account.view";

type AccountState = { /* your states */ };

type AccountDispatch = { /* your dispatchs */ };

export type AccountProps = AccountState & AccountDispatch;

const Account: React.FC<AccountProps> = (props) => {
	return <AccountView {...props} />
}

const mapStateToProps = (/* your global app state type */): AccountState => {
	return { /* your states */ };
}

const mapDispatchToProps: AccountDispatch = {
	// your dispatchs
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
