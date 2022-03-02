import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Input from "./components/input/Input";
import Library from "./components/library/Library"



import "./App.css";


function App() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/input" element={<Input/>}/>
            <Route path='/maps' element={<Maps/>}/>
          </Routes>
    </div>
  );
}

export default App;