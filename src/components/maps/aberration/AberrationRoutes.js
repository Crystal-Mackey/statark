import {
  Aberration,
  Bulbdog,
  Featherlight,
  Glowtail,
  Ravager,
  RockDrake,
  RollRat,
  Shinehorn,
} from "./index";
import {
  Anglerfish,
  Ankylosaurus,
  Araneo,
  Arthropluera,
  Baryonyx,
  Beelzebufo,
  Carbonemys,
  Carnotaurus,
  Dimetrodon,
  Dimorphodon,
  Diplocaulus,
  Diplodocus,
  DireBear,
  Dodo,
  Doedicurus,
  Electrophorus,
  Equus,
  Gigantopithecus,
  Iguanodon,
  Lystrosaurus,
  Manta,
  Megalosaurus,
  Moschops,
  Otter,
  Ovis,
  Paraceratherium,
  Parasaur,
  Pulmonoscorpius,
  Purlovia,
  Raptor,
  Sarcosuchus,
  Spinosaurus,
  Stegosaurus,
  Triceratops,
} from "../island/index";
import { Routes, Route } from "react-router-dom";

const AberrationRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/maps/aberration" element={<Aberration />} />
        <Route path="/maps/aberration/bulbdog" element={<Bulbdog />} />
        <Route
          path="/maps/aberration/featherlight"
          element={<Featherlight />}
        />
        <Route path="/maps/aberration/glowtail" element={<Glowtail />} />
        <Route path="/maps/aberration/ravager" element={<Ravager />} />
        <Route path="/maps/aberration/rockdrake" element={<RockDrake />} />
        <Route path="/maps/aberration/rollrat" element={<RollRat />} />
        <Route path="/maps/aberration/shinehorn" element={<Shinehorn />} />
        <Route path="/maps/aberration/anglerfish" element={<Anglerfish />} />
        <Route
          path="/maps/aberration/ankylosaurus"
          element={<Ankylosaurus />}
        />
        <Route path="/maps/aberration/araneo" element={<Araneo />} />
        <Route
          path="/maps/aberration/arthropluera"
          element={<Arthropluera />}
        />
        <Route path="/maps/aberration/baryonyx" element={<Baryonyx />} />
        <Route path="/maps/aberration/beelzebufo" element={<Beelzebufo />} />
        <Route path="/maps/aberration/carbonemys" element={<Carbonemys />} />
        <Route path="/maps/aberration/carnotaurus" element={<Carnotaurus />} />
        <Route path="/maps/aberration/dimetrodon" element={<Dimetrodon />} />
        <Route path="/maps/aberration/dimorphodon" element={<Dimorphodon />} />
        <Route path="/maps/aberration/diplocaulus" element={<Diplocaulus />} />
        <Route path="/maps/aberration/diplodocus" element={<Diplodocus />} />
        <Route path="/maps/aberration/direbear" element={<DireBear />} />
        <Route path="/maps/aberration/dodo" element={<Dodo />} />
        <Route path="/maps/aberration/doedicurus" element={<Doedicurus />} />
        <Route
          path="/maps/aberration/electrophorus"
          element={<Electrophorus />}
        />
        <Route path="/maps/aberration/equus" element={<Equus />} />
        <Route
          path="/maps/aberration/gigantopithecus"
          element={<Gigantopithecus />}
        />
        <Route path="/maps/aberration/iguanodon" element={<Iguanodon />} />
        <Route
          path="/maps/aberration/lystrosaurus"
          element={<Lystrosaurus />}
        />
        <Route path="/maps/aberration/manta" element={<Manta />} />
        <Route
          path="/maps/aberration/megalosaurus"
          element={<Megalosaurus />}
        />
        <Route path="/maps/aberration/moschops" element={<Moschops />} />
        <Route path="/maps/aberration/otter" element={<Otter />} />
        <Route path="/maps/aberration/ovis" element={<Ovis />} />
        <Route
          path="/maps/aberration/paraceratherium"
          element={<Paraceratherium />}
        />
        <Route path="/maps/aberration/parasaur" element={<Parasaur />} />
        <Route
          path="/maps/aberration/pulmonoscorpius"
          element={<Pulmonoscorpius />}
        />
        <Route path="/maps/aberration/purlovia" element={<Purlovia />} />
        <Route path="/maps/aberration/raptor" element={<Raptor />} />
        <Route path="/maps/aberration/sarcosuchus" element={<Sarcosuchus />} />
        <Route path="/maps/aberration/spinosaurus" element={<Spinosaurus />} />
        <Route path="/maps/aberration/stegosaurus" element={<Stegosaurus />} />
        <Route path="/maps/aberration/triceratops" element={<Triceratops />} />
      </Routes>
    </div>
  );
};

export default AberrationRoutes;
