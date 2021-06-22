import React from 'react';
import { Provider } from 'react-redux';

import store from "./services/store";
import history from "./services/history";
import { AppContainer } from "./AppContainer";
import "./shared/styles/main.scss";

function App() {
  return (
    <Provider store={store}>
      <AppContainer
        history={history}
      />
    </Provider>
  );
}

export default App;
