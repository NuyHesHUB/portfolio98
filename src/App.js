import React/* , { useState, useEffect }  */from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Bios from './components/Bios/Bios';
import Loading from './components/Loading/Loading';
import Windows from './components/Windows/Windows'
import './styles/total_style.css'
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import reducer from './store/reducers/reducer'

function App() {
  const store = createStore(reducer);

  return (
        <BrowserRouter>
        <Provider store={store} >
            <Routes >
                <Route path={'/'}element={<Bios />}></Route>
                <Route path={'/Loading'} element={<Loading />}></Route>
                <Route path={"/Windows"} element={<Windows />}></Route>
            </Routes>
          </Provider>
        </BrowserRouter> 
  );
}
//"homepage": "https://nuyheshub.github.io/pilot-test-win/",
//<Route path={'/pilot-test-win'}element={<Bios />}></Route>
//{`${process.env.PUBLIC_URL}/`} 
///*  basename={process.env.PUBLIC_URL} */
export default App;