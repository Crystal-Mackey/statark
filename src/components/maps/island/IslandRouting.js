import {
  Island,
  Achatina,
  Allosaurus,
  Anglerfish,
  Ankylosaurus,
  Araneo,
  Archaeopteryx,
  Argentavis,
  Arthropluera,
  Baryonyx, Basilosaurus, Beelzebufo, Brontosaurus,
  Carbonemys,
  Carnotaurus,
  Castoroides,
  Chalicotherium,
  Compy,
  Daeodon,
  Dilophosaur,
  Dimetrodon,
  Dimorphodon,
  Diplocaulus,
  Diplodocus,
  DireBear,
  Direwolf,
  Dodo,
  Doedicurus,
  Dunkleosteus,
  Electrophorus,
  Equus,
  Gallimimus,
  Giganotosaurus,
  Gigantopithecus,
  Hesperonis,
  Hyaenodon,
  Ichthyornis,
  Ichthyosaurus,
  Iguanodon,
  Kairuku,
  Kaprosuchus,
  Kentrosaurus,
  Lystrosaurus,
  Mammoth,
  Manta,
  Megalania,
  Megaloceros,
  Megalodon,
  Megalosaurus,
  Megatherium,
  Mesopithecus,
  Microraptor,
  Mosasaurus,
  Moschops,
  Onyc,
  Otter,
  Oviraptor,
  Ovis,
  Pachycephalosaurus,
  Pachyrhinosaurus,
  Paraceratherium,
  Parasaur,
  Pegomastax,
  Pelagornis,
  Phiomia,
  Plesiosaur,
  Procoptodon,
  Pteranodon,
  Pulmonoscorpius,
  Purlovia,
  Quetzalcoatlus,
  Raptor,
  Rex,
  Sabertooth,
  Sarcosuchus,
  Spinosaurus,
  Stegosaurus,
  Tapejara,
  TerrorBird,
  Therizinosaur,
  Thylacoleo,
  Triceratops,
  Troodon,
  Tusoteuthis,
  WoollyRhino,
  Yutyrannus,
} from "./index";
import { Routes, Route } from "react-router-dom";

const IslandRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/maps/island" element={<Island />} />
        <Route path="/maps/island/achatina" element={<Achatina />} />
        <Route path="/maps/island/allosaurus" element={<Allosaurus />} />
        <Route path="/maps/island/anglerfish" element={<Anglerfish />} />
        <Route path="/maps/island/ankylosaurus" element={<Ankylosaurus />} />
        <Route path="/maps/island/araneo" element={<Araneo />} />
        <Route path="/maps/island/archaeopteryx" element={<Archaeopteryx />} />
        <Route path="/maps/island/argentavis" element={<Argentavis />} />
        <Route path="/maps/island/arthropluera" element={<Arthropluera />} />
        <Route path="/maps/island/baryonyx" element={<Baryonyx />} />
        <Route path="/maps/island/basilosaurus" element={<Basilosaurus />} />
        <Route path="/maps/island/beelzebufo" element={<Beelzebufo />} />
        <Route path="/maps/island/brontosaurus" element={<Brontosaurus />} />
        <Route path="/maps/island/carbonemys" element={<Carbonemys />} />
        <Route path="/maps/island/carnotaurus" element={<Carnotaurus />} />
        <Route path="/maps/island/castoroides" element={<Castoroides />} />
        <Route
          path="/maps/island/chalicotherium"
          element={<Chalicotherium />}
        />
        <Route path="/maps/island/compy" element={<Compy />} />
        <Route path="/maps/island/daeodon" element={<Daeodon />} />
        <Route path="/maps/island/dilophosaur" element={<Dilophosaur />} />
        <Route path="/maps/island/dimetrodon" element={<Dimetrodon />} />
        <Route path="/maps/island/dimorphodon" element={<Dimorphodon />} />
        <Route path="/maps/island/diplocaulus" element={<Diplocaulus />} />
        <Route path="/maps/island/diplodocus" element={<Diplodocus />} />
        <Route path="/maps/island/direbear" element={<DireBear />} />
        <Route path="/maps/island/direwolf" element={<Direwolf />} />
        <Route path="/maps/island/dodo" element={<Dodo />} />
        <Route path="/maps/island/doedicurus" element={<Doedicurus />} />
        <Route path="/maps/island/dunkleosteus" element={<Dunkleosteus />} />
        <Route path="/maps/island/electrophorus" element={<Electrophorus />} />
        <Route path="/maps/island/equus" element={<Equus />} />
        <Route path="/maps/island/gallimimus" element={<Gallimimus />} />
        <Route
          path="/maps/island/giganotosaurus"
          element={<Giganotosaurus />}
        />
        <Route
          path="/maps/island/gigantopithecus"
          element={<Gigantopithecus />}
        />
        <Route path="/maps/island/hesperonis" element={<Hesperonis />} />
        <Route path="/maps/island/hyaenodon" element={<Hyaenodon />} />
        <Route path="/maps/island/ichthyornis" element={<Ichthyornis />} />
        <Route path="/maps/island/ichthyosaurus" element={<Ichthyosaurus />} />
        <Route path="/maps/island/iguanodon" element={<Iguanodon />} />
        <Route path="/maps/island/kairuku" element={<Kairuku />} />
        <Route path="/maps/island/kaprosuchus" element={<Kaprosuchus />} />
        <Route path="/maps/island/kentrosaurus" element={<Kentrosaurus />} />
        <Route path="/maps/island/lystrosaurus" element={<Lystrosaurus />} />
        <Route path="/maps/island/mammoth" element={<Mammoth />} />
        <Route path="/maps/island/manta" element={<Manta />} />
        <Route path="/maps/island/megalania" element={<Megalania />} />
        <Route path="/maps/island/megaloceros" element={<Megaloceros />} />
        <Route path="/maps/island/megalodon" element={<Megalodon />} />
        <Route path="/maps/island/megalosaurus" element={<Megalosaurus />} />
        <Route path="/maps/island/megatherium" element={<Megatherium />} />
        <Route path="/maps/island/mesopithecus" element={<Mesopithecus />} />
        <Route path="/maps/island/microraptor" element={<Microraptor />} />
        <Route path="/maps/island/mosasaurus" element={<Mosasaurus />} />
        <Route path="/maps/island/moschops" element={<Moschops />} />
        <Route path="/maps/island/onyc" element={<Onyc />} />
        <Route path="/maps/island/otter" element={<Otter />} />
        <Route path="/maps/island/oviraptor" element={<Oviraptor />} />
        <Route path="/maps/island/ovis" element={<Ovis />} />
        <Route path="/maps/island/pachy" element={<Pachycephalosaurus />} />
        <Route
          path="/maps/island/pachyrhinosaurus"
          element={<Pachyrhinosaurus />}
        />
        <Route
          path="/maps/island/paraceratherium"
          element={<Paraceratherium />}
        />
        <Route path="/maps/island/parasaur" element={<Parasaur />} />
        <Route path="/maps/island/pegomastax" element={<Pegomastax />} />
        <Route path="/maps/island/pelagornis" element={<Pelagornis />} />
        <Route path="/maps/island/phiomia" element={<Phiomia />} />
        <Route path="/maps/island/plesiosaur" element={<Plesiosaur />} />
        <Route path="/maps/island/procoptodon" element={<Procoptodon />} />
        <Route path="/maps/island/pteranodon" element={<Pteranodon />} />
        <Route
          path="/maps/island/pulmonoscorpius"
          element={<Pulmonoscorpius />}
        />
        <Route path="/maps/island/purlovia" element={<Purlovia />} />
        <Route
          path="/maps/island/quetzalcoatlus"
          element={<Quetzalcoatlus />}
        />
        <Route path="/maps/island/raptor" element={<Raptor />} />
        <Route path="/maps/island/rex" element={<Rex />} />
        <Route path="/maps/island/sabertooth" element={<Sabertooth />} />
        <Route path="/maps/island/sarcosuchus" element={<Sarcosuchus />} />
        <Route path="/maps/island/spinosaurus" element={<Spinosaurus />} />
        <Route path="/maps/island/stegosaurus" element={<Stegosaurus />} />
        <Route path="/maps/island/tapejara" element={<Tapejara />} />
        <Route path="/maps/island/terrorbird" element={<TerrorBird />} />
        <Route path="/maps/island/therizinosaur" element={<Therizinosaur />} />
        <Route path="/maps/island/thylacoleo" element={<Thylacoleo />} />
        <Route path="/maps/island/triceratops" element={<Triceratops />} />
        <Route path="/maps/island/troodon" element={<Troodon />} />
        <Route path="/maps/island/tusoteuthis" element={<Tusoteuthis />} />
        <Route path="/maps/island/woollyrhino" element={<WoollyRhino />} />
        <Route path="/maps/island/yutyrannus" element={<Yutyrannus />} />
      </Routes>
    </div>
  );
};

export default IslandRoutes;
