import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.view";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store";
import Modal from "react-modal";

Modal.setAppElement('#root');

const store = createStore(rootReducer);

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById("root"));

serviceWorker.unregister();
