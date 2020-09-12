import React from "react";
import { AccountTypeView } from "./AccountType.view";

type AccountTypeState = { /* your states */ };

export type AccountTypeProps = AccountTypeState;

export const AccountType: React.FC<AccountTypeProps> = (props) => {
	return <AccountTypeView {...props} />
}
