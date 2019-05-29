import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore from "./store";
import history from "./history";
import ru_RU from "antd/lib/locale-provider/ru_RU";
import { LocaleProvider } from "antd";
import Root from "./routes/Root";
import "./App.scss";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter  history={history}>
        <LocaleProvider locale={ru_RU}>
          <Root />
        </LocaleProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
