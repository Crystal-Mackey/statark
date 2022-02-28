import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Input from "./components/input/Input";
import Library from "./components/library/Library"
// import { Fjordur, Andrewsarchus, Carcharondontosaurus, Desmodus, Fenrir, Fjordhawk } from "./components/maps/fjordur";


import "./App.css";


function App() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/input" element={<Input/>}/>
            <Route path='/maps' element={<Maps/>}/>
            {/* <Route path='/maps/fjordur' element={<Fjordur/>}/>
            <Route path="/maps/fjordur/andrewsarchus" element={<Andrewsarchus/>}/>
            <Route path="/maps/fjordur/carcharondontosaurus" element={<Carcharondontosaurus/>}/>
            <Route path="/maps/fjordur/desmodus" element={<Desmodus/>}/>
            <Route path="/maps/fjordur/fenrir" element={<Fenrir/>}/>
            <Route path="/maps/fjordur/fjordhawk" element={<Fjordhawk/>}/> */}
          </Routes>
    </div>
  );
}

export default App;