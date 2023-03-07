/* import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './styles/total_style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reportWebVitals from "./reportWebVitals";
import reducer from './store/reducers/reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
