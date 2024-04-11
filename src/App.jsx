import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fetch from "./components/Product";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
        <Route path='/' element={<Fetch/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
