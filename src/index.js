import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import { store } from "./components/store/reduxStore";
import {
  FjordurRoutes,
  IslandRoutes,
  AberrationRoutes,
  CenterRoutes,
  CrystalIslesRoutes,
  ScorchedRoutes,
  RagnarokRoutes,
  ExtinctionRoutes,
  ValgueroRoutes,
  GenesisRoutes,
  Genesis2Routes,
  LostIslandRoutes,
} from "./components/maps/index";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
        <IslandRoutes />
        <CenterRoutes />
        <ScorchedRoutes />
        <AberrationRoutes />
        <RagnarokRoutes />
        <ExtinctionRoutes />
        <ValgueroRoutes />
        <CrystalIslesRoutes />
        <GenesisRoutes />
        <Genesis2Routes />
        <LostIslandRoutes />
        <FjordurRoutes />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
