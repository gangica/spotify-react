import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './context/StateProvider';
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
