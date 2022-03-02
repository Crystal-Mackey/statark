import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js"
import { Provider } from "react-redux";
import { store } from "./components/store/reduxStore";
import FjordurRoutes from "./components/maps/fjordur/FjordRoutes";
import IslandRoutes from "./components/maps/island/IslandRouting";
import AberrationRoutes from "./components/maps/aberration/AberrationRoutes";
import CenterRoutes from "./components/maps/center/CenterRoutes";
import CrystalIslesRoutes from "./components/maps/crystalisles/CrystalIslesRoutes";
import ScorchedRoutes from "./components/maps/scorchedearth/ScorchedEarthRoutes";


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
      <IslandRoutes/>
      <CenterRoutes/>
      <ScorchedRoutes/>
      <AberrationRoutes/>
      <CrystalIslesRoutes/>
      <FjordurRoutes/>
    </Provider>
  </Router>
</React.StrictMode>,
document.getElementById("root"),
);
