import { Fjordur, Andrewsarchus, Carcharondontosaurus, Desmodus, Fenrir, Fjordhawk } from "./index";
import { Routes, Route } from "react-router-dom";


const FjordurRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/maps/fjordur" element={<Fjordur />} />
        <Route path="/maps/fjordur/andrewsarchus" element={<Andrewsarchus />} />
        <Route
          path="/maps/fjordur/carcharondontosaurus"
          element={<Carcharondontosaurus />}
        />
        <Route path="/maps/fjordur/desmodus" element={<Desmodus />} />
        <Route path="/maps/fjordur/fenrir" element={<Fenrir />} />
        <Route path="/maps/fjordur/fjordhawk" element={<Fjordhawk />} />
      </Routes>
    </div>
  );
};

export default FjordurRoutes;
