import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../../../../../../../store";

import { SettingsView } from "./Settings.view";
import { setReinvestment } from "../../../../../../../../store/Account/Account.actions";

type SettingsState = { reinvestment: boolean };

type SettingsDispatch = {
    setReinvestment: typeof setReinvestment;
};
export type SettingsProps = SettingsState & SettingsDispatch;

const Settings: React.FC<SettingsProps> = (props) => {
    return <SettingsView {...props} />;
};

const mapStateToProps = (state: AppState): SettingsState => {
    const { reinvestment: reinvestment } = state.account;

    return { reinvestment };
};

const mapDispatchToProps: SettingsDispatch = {
    setReinvestment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
