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


import './styles/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
);
reportWebVitals();

/* import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import Bios from './components/Bios/Bios';
import Loading from './components/Loading/Loading';
import Windows from './components/Windows/Windows';

import reportWebVitals from "./reportWebVitals";
import reducer from './store/reducers/reducer'

import './styles/index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);

root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Windows/>}></Route>
        <Route path="/loading" element={<Loading/>}></Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
reportWebVitals(); */