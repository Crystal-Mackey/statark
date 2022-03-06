import { Amargasaurus, Dinopithecus, Sinomacrops, LostIsland } from "./index";

import {
  Achatina,
  Allosaurus,
  Anglerfish,
  Ankylosaurus,
  Araneo,
  Archaeopteryx,
  Argentavis,
  Arthropluera,
  Baryonyx,
  Basilosaurus,
  Beelzebufo,
  Brontosaurus,
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
  Yutyrannus
} from "../island/index";

import { Glowtail, Ravager } from "../aberration/index";

import { Jerboa, Lymantria, Mantis, Morellatops, ThornyDragon, Vulture, Wyvern } from "../scorchedearth/index";

import { Managarmr, SnowOwl } from "../extinction/index";

import { Ferox, Magmasaur, Megachelon} from "../genesis/index";

import { Maewing } from "../genesis2/index";

import { Routes, Route } from "react-router-dom";

const LostIslandRoutes = () => {
  return (
    <div>
      <Routes>
          <Route path="/maps/lostisland" element={<LostIsland/>}/>
        <Route
          path="/maps/lostisland/amargasaurus"
          element={<Amargasaurus />}
        />
        <Route path="/maps/lostisland/carnotaurus" element={<Carnotaurus />} />
        <Route
          path="/maps/lostisland/pulmonoscorpius"
          element={<Pulmonoscorpius />}
        />
        <Route path="/maps/lostisland/achatina" element={<Achatina />} />
        <Route path="/maps/lostisland/allosaurus" element={<Allosaurus />} />
        <Route path="/maps/lostisland/anglerfish" element={<Anglerfish />} />
        <Route
          path="/maps/lostisland/ankylosaurus"
          element={<Ankylosaurus />}
        />
        <Route path="/maps/lostisland/araneo" element={<Araneo />} />
        <Route
          path="/maps/lostisland/archaeopteryx"
          element={<Archaeopteryx />}
        />
        <Route path="/maps/lostisland/argentavis" element={<Argentavis />} />
        <Route
          path="/maps/lostisland/arthropluera"
          element={<Arthropluera />}
        />
        <Route path="/maps/lostisland/baryonyx" element={<Baryonyx />} />
        <Route
          path="/maps/lostisland/basilosaurus"
          element={<Basilosaurus />}
        />
        <Route path="/maps/lostisland/beelzebufo" element={<Beelzebufo />} />
        <Route
          path="/maps/lostisland/brontosaurus"
          element={<Brontosaurus />}
        />
        <Route path="/maps/lostisland/carbonemys" element={<Carbonemys />} />
        <Route path="/maps/lostisland/carnotaurus" element={<Carnotaurus />} />
        <Route path="/maps/lostisland/castoroides" element={<Castoroides />} />
        <Route
          path="/maps/lostisland/chalicotherium"
          element={<Chalicotherium />}
        />
        <Route path="/maps/lostisland/compy" element={<Compy />} />
        <Route path="/maps/lostisland/daeodon" element={<Daeodon />} />
        <Route path="/maps/lostisland/dilophosaur" element={<Dilophosaur />} />
        <Route path="/maps/lostisland/dimetrodon" element={<Dimetrodon />} />
        <Route path="/maps/lostisland/dimorphodon" element={<Dimorphodon />} />
        <Route
          path="/maps/lostisland/dinopithecus"
          element={<Dinopithecus />}
        />
        <Route path="/maps/lostisland/diplocaulus" element={<Diplocaulus />} />
        <Route path="/maps/lostisland/diplodocus" element={<Diplodocus />} />
        <Route path="/maps/lostisland/direbear" element={<DireBear />} />
        <Route path="/maps/lostisland/direwolf" element={<Direwolf />} />
        <Route path="/maps/lostisland/dodo" element={<Dodo />} />
        <Route path="/maps/lostisland/doedicurus" element={<Doedicurus />} />
        <Route
          path="/maps/lostisland/dunkleosteus"
          element={<Dunkleosteus />}
        />
        <Route
          path="/maps/lostisland/electrophorus"
          element={<Electrophorus />}
        />
        <Route path="/maps/lostisland/equus" element={<Equus />} />
        <Route path="/maps/lostisland/ferox" element={<Ferox />} />
        <Route path="/maps/lostisland/gallimimus" element={<Gallimimus />} />
        <Route
          path="/maps/lostisland/giganotosaurus"
          element={<Giganotosaurus />}
        />
        <Route
          path="/maps/lostisland/gigantopithecus"
          element={<Gigantopithecus />}
        />
        <Route path="/maps/lostisland/glowtail" element={<Glowtail />} />
        <Route path="/maps/lostisland/hesperonis" element={<Hesperonis />} />
        <Route path="/maps/lostisland/hyaenodon" element={<Hyaenodon />} />
        <Route path="/maps/lostisland/ichthyornis" element={<Ichthyornis />} />
        <Route
          path="/maps/lostisland/ichthyosaurus"
          element={<Ichthyosaurus />}
        />
        <Route path="/maps/lostisland/iguanodon" element={<Iguanodon />} />
        <Route path="/maps/lostisland/jerboa" element={<Jerboa />} />
        <Route path="/maps/lostisland/kairuku" element={<Kairuku />} />
        <Route path="/maps/lostisland/kaprosuchus" element={<Kaprosuchus />} />
        <Route
          path="/maps/lostisland/kentrosaurus"
          element={<Kentrosaurus />}
        />
        <Route path="/maps/lostisland/lymantria" element={<Lymantria />} />
        <Route
          path="/maps/lostisland/lystrosaurus"
          element={<Lystrosaurus />}
        />
        <Route path="/maps/lostisland/maewing" element={<Maewing />} />
        <Route path="/maps/lostisland/magmasaur" element={<Magmasaur />} />
        <Route path="/maps/lostisland/mammoth" element={<Mammoth />} />
        <Route path="/maps/lostisland/managarmr" element={<Managarmr />} />
        <Route path="/maps/lostisland/manta" element={<Manta />} />
        <Route path="/maps/lostisland/mantis" element={<Mantis />} />
        <Route path="/maps/lostisland/megachelon" element={<Megachelon />} />
        <Route path="/maps/lostisland/megalania" element={<Megalania />} />
        <Route path="/maps/lostisland/megaloceros" element={<Megaloceros />} />
        <Route path="/maps/lostisland/megalodon" element={<Megalodon />} />
        <Route
          path="/maps/lostisland/megalosaurus"
          element={<Megalosaurus />}
        />
        <Route path="/maps/lostisland/megatherium" element={<Megatherium />} />
        <Route
          path="/maps/lostisland/mesopithecus"
          element={<Mesopithecus />}
        />
        <Route path="/maps/lostisland/microraptor" element={<Microraptor />} />
        <Route path="/maps/lostisland/morellatops" element={<Morellatops />} />
        <Route path="/maps/lostisland/mosasaurus" element={<Mosasaurus />} />
        <Route path="/maps/lostisland/moschops" element={<Moschops />} />
        <Route path="/maps/lostisland/onyc" element={<Onyc />} />
        <Route path="/maps/lostisland/otter" element={<Otter />} />
        <Route path="/maps/lostisland/oviraptor" element={<Oviraptor />} />
        <Route path="/maps/lostisland/ovis" element={<Ovis />} />
        <Route path="/maps/lostisland/pachy" element={<Pachycephalosaurus />} />
        <Route
          path="/maps/lostisland/pachyrhinosaurus"
          element={<Pachyrhinosaurus />}
        />
        <Route
          path="/maps/lostisland/paraceratherium"
          element={<Paraceratherium />}
        />
        <Route path="/maps/lostisland/parasaur" element={<Parasaur />} />
        <Route path="/maps/lostisland/pegomastax" element={<Pegomastax />} />
        <Route path="/maps/lostisland/pelagornis" element={<Pelagornis />} />
        <Route path="/maps/lostisland/phiomia" element={<Phiomia />} />
        <Route path="/maps/lostisland/plesiosaur" element={<Plesiosaur />} />
        <Route path="/maps/lostisland/procoptodon" element={<Procoptodon />} />
        <Route path="/maps/lostisland/pteranodon" element={<Pteranodon />} />
        <Route
          path="/maps/lostisland/pulmonoscorpius"
          element={<Pulmonoscorpius />}
        />
        <Route path="/maps/lostisland/purlovia" element={<Purlovia />} />
        <Route
          path="/maps/lostisland/quetzalcoatlus"
          element={<Quetzalcoatlus />}
        />
        <Route path="/maps/lostisland/equus" element={<Equus />} />
        <Route path="/maps/lostisland/megatherium" element={<Megatherium />} />
        <Route path="/maps/lostisland/raptor" element={<Raptor />} />
        <Route path="/maps/lostisland/ravager" element={<Ravager />} />
        <Route path="/maps/lostisland/rex" element={<Rex />} />
        <Route path="/maps/lostisland/sabertooth" element={<Sabertooth />} />
        <Route path="/maps/lostisland/sarcosuchus" element={<Sarcosuchus />} />
        <Route path="/maps/lostisland/sinomacrops" element={<Sinomacrops />} />
        <Route path="/maps/lostisland/snowowl" element={<SnowOwl />} />
        <Route path="/maps/lostisland/spinosaurus" element={<Spinosaurus />} />
        <Route path="/maps/lostisland/stegosaurus" element={<Stegosaurus />} />
        <Route path="/maps/lostisland/tapejara" element={<Tapejara />} />
        <Route path="/maps/lostisland/terrorbird" element={<TerrorBird />} />
        <Route
          path="/maps/lostisland/therizinosaur"
          element={<Therizinosaur />}
        />
        <Route
          path="/maps/lostisland/thornydragon"
          element={<ThornyDragon />}
        />
        <Route path="/maps/lostisland/thylacoleo" element={<Thylacoleo />} />
        <Route path="/maps/lostisland/triceratops" element={<Triceratops />} />
        <Route path="/maps/lostisland/troodon" element={<Troodon />} />
        <Route path="/maps/lostisland/tusoteuthis" element={<Tusoteuthis />} />
        <Route path="/maps/lostisland/vulture" element={<Vulture />} />
        <Route path="/maps/lostisland/woollyrhino" element={<WoollyRhino />} />
        <Route
          path="/maps/lostisland/dunkleosteus"
          element={<Dunkleosteus />}
        />
        <Route path="/maps/lostisland/yutyrannus" element={<Yutyrannus />} />
        <Route path="/maps/lostisland/wyvern" element={<Wyvern />} />
      </Routes>
    </div>
  );
};

export default LostIslandRoutes;
