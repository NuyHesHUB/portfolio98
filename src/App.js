import React/* , { useState, useEffect }  */from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Bios from './components/Bios/Bios';
import Windows from './components/Windows/Windows'
import './styles/total_style.css'

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Bios />}></Route>
            <Route path={"/Windows"} element={<Windows />}></Route>
        </Routes>
      </BrowserRouter> 
  );
}

export default App;