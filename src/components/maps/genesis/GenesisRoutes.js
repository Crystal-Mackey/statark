import { Genesis, Bloodstalker, Ferox, Magmasaur, Megachelon } from "./index";
import {
  Allosaurus,
  Anglerfish,
  Ankylosaurus,
  Argentavis,
  Araneo,
  Archaeopteryx,
  Arthropluera,
  Baryonyx,
  Basilosaurus,
  Beelzebufo,
  Brontosaurus,
  Carbonemys,
  Carnotaurus,
  Castoroides,
  Chalicotherium,
  Daeodon,
  Dilophosaur,
  Dimetrodon,
  Dimorphodon,
  Diplocaulus,
  DireBear,
  Direwolf,
  Dodo,
  Doedicurus,
  Dunkleosteus,
  Electrophorus,
  Equus,
  Gallimimus,
  Gigantopithecus,
  Hesperonis,
  Ichthyosaurus,
  Ichthyornis,
  Iguanodon,
  Kairuku,
  Kaprosuchus,
  Kentrosaurus,
  Lystrosaurus,
  Mammoth,
  Manta,
  Megaloceros,
  Megalodon,
  Megalania,
  Megatherium,
  Mesopithecus,
  Microraptor,
  Moschops,
  Mosasaurus,
  Otter,
  Onyc,
  Oviraptor,
  Ovis,
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
  Rex,
  Sabertooth,
  Sarcosuchus,
  Spinosaurus,
  Stegosaurus,
  TerrorBird,
  Therizinosaur,
  Triceratops,
  Tusoteuthis,
  Tapejara,
  WoollyRhino,
  Yutyrannus,
} from "../island/index";

import { Bulbdog, Featherlight, Ravager, RollRat, Shinehorn } from "../aberration/index";
import { ThornyDragon } from "../scorchedearth/index"
import { Gasbags } from "../extinction/index";

import { Routes, Route } from "react-router-dom";

const GenesisRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/maps/genesis" element={<Genesis />} />
        <Route path="/maps/genesis/bloodstalker" element={<Bloodstalker />} />
        <Route path="/maps/genesis/ferox" element={<Ferox />} />
        <Route path="/maps/genesis/magmasaur" element={<Magmasaur />} />
        <Route path="/maps/genesis/megachelon" element={<Megachelon />} />
        <Route path="/maps/genesis/triceratops" element={<Triceratops />} />
        <Route path="/maps/genesis/allosaurus" element={<Allosaurus />} />
        <Route path="/maps/genesis/ankylosaurus" element={<Ankylosaurus />} />
        <Route path="/maps/genesis/argentavis" element={<Argentavis />} />
        <Route path="/maps/genesis/basilosaurus" element={<Basilosaurus />} />
        <Route path="/maps/genesis/dunkleosteus" element={<Dunkleosteus />} />
        <Route path="/maps/genesis/ichthyosaurus" element={<Ichthyosaurus />} />
        <Route path="/maps/genesis/megalodon" element={<Megalodon />} />
        <Route path="/maps/genesis/mosasaurus" element={<Mosasaurus />} />
        <Route path="/maps/genesis/otter" element={<Otter />} />
        <Route
          path="/maps/genesis/paraceratherium"
          element={<Paraceratherium />}
        />
        <Route path="/maps/genesis/raptor" element={<Parasaur />} />
        <Route path="/maps/genesis/rex" element={<Rex />} />
        <Route path="/maps/genesis/sabertooth" element={<Sabertooth />} />
        <Route path="/maps/genesis/spino" element={<Spinosaurus />} />
        <Route path="/maps/genesis/tapejara" element={<Tapejara />} />
        <Route path="/maps/genesis/triceratops" element={<Triceratops />} />
        <Route path="/maps/genesis/woollyrhino" element={<WoollyRhino />} />
        <Route path="/maps/genesis/yutyrannus" element={<Yutyrannus />} />
        <Route path="/maps/genesis/anglerfish" element={<Anglerfish />} />
        <Route path="/maps/genesis/araneo" element={<Araneo />} />
        <Route path="/maps/genesis/archaeopteryx" element={<Archaeopteryx />} />
        <Route path="/maps/genesis/argentavis" element={<Argentavis />} />
        <Route path="/maps/genesis/arthropluera" element={<Arthropluera />} />
        <Route path="/maps/genesis/baryonyx" element={<Baryonyx />} />
        <Route path="/maps/genesis/beelzebufo" element={<Beelzebufo />} />
        <Route path="/maps/genesis/brontosaurus" element={<Brontosaurus />} />
        <Route path="/maps/genesis/bulbdog" element={<Bulbdog />} />
        <Route path="/maps/genesis/carbonemys" element={<Carbonemys />} />
        <Route path="/maps/genesis/carnotaurus" element={<Carnotaurus />} />
        <Route path="/maps/genesis/castoroides" element={<Castoroides />} />
        <Route
          path="/maps/genesis/chalicotherium"
          element={<Chalicotherium />}
        />
        <Route path="/maps/genesis/daeodon" element={<Daeodon />} />
        <Route path="/maps/genesis/dilophosaur" element={<Dilophosaur />} />
        <Route path="/maps/genesis/dimetrodon" element={<Dimetrodon />} />
        <Route path="/maps/genesis/dimorphodon" element={<Dimorphodon />} />
        <Route path="/maps/genesis/diplocaulus" element={<Diplocaulus />} />
        <Route path="/maps/genesis/direbear" element={<DireBear />} />
        <Route path="/maps/genesis/direwolf" element={<Direwolf />} />
        <Route path="/maps/genesis/dodo" element={<Dodo />} />
        <Route path="/maps/genesis/doedicurus" element={<Doedicurus />} />
        <Route path="/maps/genesis/electrophorus" element={<Electrophorus />} />
        <Route path="/maps/genesis/equus" element={<Equus />} />
        <Route path="/maps/genesis/featherlight" element={<Featherlight />} />
        <Route path="/maps/genesis/gallimimus" element={<Gallimimus />} />
        <Route path="/maps/genesis/gasbags" element={<Gasbags />} />
        <Route
          path="/maps/genesis/gigantopithecus"
          element={<Gigantopithecus />}
        />
        <Route path="/maps/genesis/hesperonis" element={<Hesperonis />} />
        <Route path="/maps/genesis/ichthyornis" element={<Ichthyornis />} />
        <Route path="/maps/genesis/iguanodon" element={<Iguanodon />} />
        <Route path="/maps/genesis/kairuku" element={<Kairuku />} />
        <Route path="/maps/genesis/kaprosuchus" element={<Kaprosuchus />} />
        <Route path="/maps/genesis/kentrosaurus" element={<Kentrosaurus />} />
        <Route path="/maps/genesis/lystrosaurus" element={<Lystrosaurus />} />
        <Route path="/maps/genesis/mammoth" element={<Mammoth />} />
        <Route path="/maps/genesis/manta" element={<Manta />} />
        <Route path="/maps/genesis/megalania" element={<Megalania />} />
        <Route path="/maps/genesis/megaloceros" element={<Megaloceros />} />
        <Route path="/maps/genesis/megatherium" element={<Megatherium />} />
        <Route path="/maps/genesis/mesopithecus" element={<Mesopithecus />} />
        <Route path="/maps/genesis/microraptor" element={<Microraptor />} />
        <Route path="/maps/genesis/moschops" element={<Moschops />} />
        <Route path="/maps/genesis/onyc" element={<Onyc />} />
        <Route path="/maps/genesis/oviraptor" element={<Oviraptor />} />
        <Route path="/maps/genesis/ovis" element={<Ovis />} />
        <Route
          path="/maps/genesis/pachyrhinosaurus"
          element={<Pachyrhinosaurus />}
        />
        <Route path="/maps/genesis/parasaur" element={<Parasaur />} />
        <Route path="/maps/genesis/pegomastax" element={<Pegomastax />} />
        <Route path="/maps/genesis/pelagornis" element={<Pelagornis />} />
        <Route path="/maps/genesis/phiomia" element={<Phiomia />} />
        <Route path="/maps/genesis/plesiosaur" element={<Plesiosaur />} />
        <Route path="/maps/genesis/procoptodon" element={<Procoptodon />} />
        <Route path="/maps/genesis/pteranodon" element={<Pteranodon />} />
        <Route
          path="/maps/genesis/pulmonoscorpius"
          element={<Pulmonoscorpius />}
        />
        <Route path="/maps/genesis/purlovia" element={<Purlovia />} />
        <Route path="/maps/genesis/ravager" element={<Ravager />} />
        <Route path="/maps/genesis/rollrat" element={<RollRat />} />
        <Route path="/maps/genesis/sarcosuchus" element={<Sarcosuchus />} />
        <Route path="/maps/genesis/shinehorn" element={<Shinehorn />} />
        <Route path="/maps/genesis/stegosaurus" element={<Stegosaurus />} />
        <Route path="/maps/genesis/terrorbird" element={<TerrorBird />} />
        <Route path="/maps/genesis/therizinosaur" element={<Therizinosaur />} />
        <Route path="/maps/genesis/thornydragon" element={<ThornyDragon />} />
        <Route path="/maps/genesis/tusoteuthis" element={<Tusoteuthis />} />
      </Routes>
    </div>
  );
};

export default GenesisRoutes;
