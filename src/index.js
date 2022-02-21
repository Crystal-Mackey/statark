import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Maps from "./components/Maps";
import Home from "./components/Home";
import Fjordur from "./components/maps/fjordur/Fjordur";



ReactDOM.render(
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/maps' element={<Maps/>}/>
            <Route path='/maps/fjordur' element={<Fjordur/>}/>
          </Routes>
        </Router>,
  document.getElementById("root"),
);

