import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.js"
import { Provider } from "react-redux";
import { store } from "./components/store/reduxStore";
import FjordurRoutes from "./components/maps/fjordur/FjordRoutes";
import IslandRoutes from "./components/maps/island/IslandRouting";


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Provider store={store}>
      <App />
      <IslandRoutes/>
      <FjordurRoutes/>
    </Provider>
  </Router>
</React.StrictMode>,
document.getElementById("root"),
);
