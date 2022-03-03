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
import RagnarokRoutes from "./components/maps/ragnarok/RagnarokRouting";
import ExtinctionRoutes from "./components/maps/extinction/ExtinctionRoutes";
import ValgueroRoutes from "./components/maps/valguero/ValgueroRoutes";


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
      <IslandRoutes/>
      <CenterRoutes/>
      <ScorchedRoutes/>
      <AberrationRoutes/>
      <RagnarokRoutes/>
      <ExtinctionRoutes/>
      <ValgueroRoutes/>
      <CrystalIslesRoutes/>
      <FjordurRoutes/>
    </Provider>
  </Router>
</React.StrictMode>,
document.getElementById("root"),
);
