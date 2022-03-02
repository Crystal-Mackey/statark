import {
  Achatina,
  Ankylosaurus,
  Araneo,
  Archaeopteryx,
  Argentavis,
  Arthropluera,
  Carnotaurus,
  Daeodon,
  Direwolf,
  Doedicurus,
  Equus,
  Gallimimus,
  Hyaenodon,
  Iguanodon,
  Kaprosuchus,
  Kentrosaurus,
  Lystrosaurus,
  Megalania,
  Megalosaurus,
  Megatherium,
  Microraptor,
  Moschops,
  Onyc,
  Ovis,
  Paraceratherium,
  Parasaur,
  Pegomastax,
  Procoptodon,
  Pulmonoscorpius,
  Purlovia,
  Raptor,
  Rex,
  Sabertooth,
  Tapejara,
  TerrorBird,
  Thylacoleo,
  Troodon,
  Yutyrannus,
} from "../island/index";

import { Jerboa, Lymantria, Mantis, Morellatops, ThornyDragon, Vulture, Wyvern, ScorchedEarth } from "./index";


import { Routes, Route } from "react-router-dom";

const ScorchedRoutes = () => {
    return(
  <Routes>
      <Route path="/maps/scorched" element={<ScorchedEarth/>}/>
    <Route path="/maps/scorched/achatina" element={<Achatina />} />
    <Route path="/maps/scorched/ankylosaurus" element={<Ankylosaurus />} />
    <Route path="/maps/scorched/araneo" element={<Araneo />} />
    <Route path="/maps/scorched/archaeopteryx" element={<Archaeopteryx />} />
    <Route path="/maps/scorched/argentavis" element={<Argentavis />} />
    <Route path="/maps/scorched/arthropluera" element={<Arthropluera />} />
    <Route path="/maps/scorched/carnotaurus" element={<Carnotaurus />} />
    <Route path="/maps/scorched/daeodon" element={<Daeodon />} />
    <Route path="/maps/scorched/direwolf" element={<Direwolf />} />
    <Route path="/maps/scorched/doedicurus" element={<Doedicurus />} />
    <Route path="/maps/scorched/equus" element={<Equus />} />
    <Route path="/maps/scorched/gallimimus" element={<Gallimimus />} />
    <Route path="/maps/scorched/hyaenodon" element={<Hyaenodon />} />
    <Route path="/maps/scorched/iguanodon" element={<Iguanodon />} />
    <Route path="/maps/scorched/jerboa" element={<Jerboa />} />
    <Route path="/maps/scorched/kaprosuchus" element={<Kaprosuchus />} />
    <Route path="/maps/scorched/kentrosaurus" element={<Kentrosaurus />} />
    <Route path="/maps/scorched/lymantria" element={<Lymantria />} />
    <Route path="/maps/scorched/lystrosaurus" element={<Lystrosaurus />} />
    <Route path="/maps/scorched/mantis" element={<Mantis />} />
    <Route path="/maps/scorched/megalania" element={<Megalania />} />
    <Route path="/maps/scorched/megalosaurus" element={<Megalosaurus />} />
    <Route path="/maps/scorched/megatherium" element={<Megatherium />} />
    <Route path="/maps/scorched/microraptor" element={<Microraptor />} />
    <Route path="/maps/scorched/morellatops" element={<Morellatops />} />
    <Route path="/maps/scorched/moschops" element={<Moschops />} />
    <Route path="/maps/scorched/onyc" element={<Onyc />} />
    <Route path="/maps/scorched/ovis" element={<Ovis />} />
    <Route
      path="/maps/scorched/paraceratherium"
      element={<Paraceratherium />}
    />
    <Route path="/maps/scorched/parasaur" element={<Parasaur />} />
    <Route path="/maps/scorched/pegomastax" element={<Pegomastax />} />
    <Route path="/maps/scorched/procoptodon" element={<Procoptodon />} />
    <Route
      path="/maps/scorched/pulmonoscorpius"
      element={<Pulmonoscorpius />}
    />
    <Route path="/maps/scorched/purlovia" element={<Purlovia />} />
    <Route path="/maps/scorched/raptor" element={<Raptor />} />
    <Route path="/maps/scorched/rex" element={<Rex />} />
    <Route path="/maps/scorched/sabertooth" element={<Sabertooth />} />
    <Route path="/maps/scorched/tapejara" element={<Tapejara />} />
    <Route path="/maps/scorched/terrorbird" element={<TerrorBird />} />
    <Route path="/maps/scorched/thornydragon" element={<ThornyDragon />} />
    <Route path="/maps/scorched/thylacoleo" element={<Thylacoleo />} />
    <Route path="/maps/scorched/troodon" element={<Troodon />} />
    <Route path="/maps/scorched/vulture" element={<Vulture />} />
    <Route path="/maps/scorched/wyvern" element={<Wyvern />} />
    <Route path="/maps/scorched/yutyrannus" element={<Yutyrannus />} />
  </Routes>
  )
};


export default ScorchedRoutes;