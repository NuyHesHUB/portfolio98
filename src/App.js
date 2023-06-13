import React, { useEffect } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Bios from './components/Bios/Bios';
import Loading from './components/Loading/Loading';
import Windows from './components/Windows/Windows'
import './styles/total_style.scss'
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import reducer from './store/reducers/reducer'
import { initGA, logPageView } from './analytics';

function App() {
  const store = createStore(reducer);
  
  useEffect(() => {
    initGA(); // Google 애널리틱스 초기화
    logPageView(); // 페이지 뷰 추적
  }, []);

  return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store} >
            <Routes >
                <Route path="/"  element={<Bios/>}></Route>
                <Route path="/loading" element={<Loading/>}></Route>
                <Route path="/Windows" element={<Windows/>}></Route>
            </Routes>
          </Provider>
          </BrowserRouter>
        
  );
}

export default App;

/* <Route path={"/pilot-test-win"} element={<Bios />}></Route> */
//"homepage": "https://nuyheshub.github.io/pilot-test-win/",
//<Route path={'/pilot-test-win'}element={<Bios />}></Route>
//{`${process.env.PUBLIC_URL}/`} 
///*  basename={process.env.PUBLIC_URL} */