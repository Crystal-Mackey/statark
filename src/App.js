import React from 'react';
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Maps from "./components/Maps";
import Input from "./components/input/Input";
import Library from "./components/library/Library"
import Fjordur from "./components/maps/fjordur/Fjordur";
import Andrewsarchus from "./components/maps/fjordur/creatures/species/Andrewsarchus";
import Carcharondontosaurus from "./components/maps/fjordur/creatures/species/Carcharondontosaurus";
import Desmodus from "./components/maps/fjordur/creatures/species/Desmodus"
import Fenrir from "./components/maps/fjordur/creatures/species/Fenrir";
import Fjordhawk from "./components/maps/fjordur/creatures/species/Fjordhawk"
import "./App.css";


function App() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/library" element={<Library/>}/>
            <Route path="/input" element={<Input/>}/>
            <Route path='/maps' element={<Maps/>}/>
            <Route path='/maps/fjordur' element={<Fjordur/>}/>
            <Route path="/maps/fjordur/andrewsarchus" element={<Andrewsarchus/>}/>
            <Route path="/maps/fjordur/carcharondontosaurus" element={<Carcharondontosaurus/>}/>
            <Route path="/maps/fjordur/desmodus" element={<Desmodus/>}/>
            <Route path="/maps/fjordur/fenrir" element={<Fenrir/>}/>
            <Route path="/maps/fjordur/fjordhawk" element={<Fjordhawk/>}/>
          </Routes>
    </div>
  );
}

export default App;