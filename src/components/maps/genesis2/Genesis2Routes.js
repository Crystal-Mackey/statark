import {
  Achatina,
  Allosaurus,
  Anglerfish,
  Ankylosaurus,
  Araneo,
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
  Hesperonis,
  Hyaenodon,
  Ichthyornis,
  Ichthyosaurus,
  Iguanodon,
  Kaprosuchus,
  Kentrosaurus,
  Lystrosaurus,
  Mammoth,
  Manta,
  Megaloceros,
  Megalodon,
  Megatherium,
  Mesopithecus,
  Microraptor,
  Mosasaurus,
  Moschops,
  Otter,
  Oviraptor,
  Ovis,
  Pachycephalosaurus,
  Pachyrhinosaurus,
  Paraceratherium,
  Parasaur,
  Pegomastax,
  Phiomia,
  Plesiosaur,
  Pteranodon,
  Pulmonoscorpius,
  Purlovia,
  Procoptodon,
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
} from "../island/index";
import { Astrodelphis, Maewing, Shadowmane, Genesis2 } from "./index";
import {
  Bulbdog,
  Featherlight,
  Glowtail,
  Shinehorn,
  Ravager,
  RollRat,
} from "../aberration/index";
import { Bloodstalker, Ferox } from "../genesis/index";
import {
  Gacha,
  Managarmr,
  Gasbags,
  SnowOwl,
  Velonasaur,
} from "../extinction/index";
import {
  Jerboa,
  Lymantria,
  Mantis,
  ThornyDragon,
  Vulture,
} from "../scorchedearth/index";
import { Routes, Route } from "react-router-dom";

const Genesis2Routes = () => {
  return (
    <div>
      <Routes>
          <Route path="/maps/genesis2" element={<Genesis2/>}/>
        <Route path="/maps/genesis2/achatina" element={<Achatina />} />
        <Route path="/maps/genesis2/allosaurus" element={<Allosaurus />} />
        <Route path="/maps/genesis2/anglerfish" element={<Anglerfish />} />
        <Route path="/maps/genesis2/ankylosaurus" element={<Ankylosaurus />} />
        <Route path="/maps/genesis2/araneo" element={<Araneo />} />
        <Route path="/maps/genesis2/argentavis" element={<Argentavis />} />
        <Route path="/maps/genesis2/arthropluera" element={<Arthropluera />} />
        <Route path="/maps/genesis2/astrodelphis" element={<Astrodelphis />} />
        <Route path="/maps/genesis2/baryonyx" element={<Baryonyx />} />
        <Route path="/maps/genesis2/basilosaurus" element={<Basilosaurus />} />
        <Route path="/maps/genesis2/beelzebufo" element={<Beelzebufo />} />
        <Route path="/maps/genesis2/bloodstalker" element={<Bloodstalker />} />
        <Route path="/maps/genesis2/brontosaurus" element={<Brontosaurus />} />
        <Route path="/maps/genesis2/bulbdog" element={<Bulbdog />} />
        <Route path="/maps/genesis2/carbonemys" element={<Carbonemys />} />
        <Route path="/maps/genesis2/carnotaurus" element={<Carnotaurus />} />
        <Route path="/maps/genesis2/castoroides" element={<Castoroides />} />
        <Route
          path="/maps/genesis2/chalicotherium"
          element={<Chalicotherium />}
        />
        <Route path="/maps/genesis2/compy" element={<Compy />} />
        <Route path="/maps/genesis2/daeodon" element={<Daeodon />} />
        <Route path="/maps/genesis2/dilophosaur" element={<Dilophosaur />} />
        <Route path="/maps/genesis2/dimetrodon" element={<Dimetrodon />} />
        <Route path="/maps/genesis2/dimorphodon" element={<Dimorphodon />} />
        <Route path="/maps/genesis2/diplocaulus" element={<Diplocaulus />} />
        <Route path="/maps/genesis2/diplodocus" element={<Diplodocus />} />
        <Route path="/maps/genesis2/direbear" element={<DireBear />} />
        <Route path="/maps/genesis2/dodo" element={<Dodo />} />
        <Route path="/maps/genesis2/doedicurus" element={<Doedicurus />} />
        <Route path="/maps/genesis2/dunkleosteus" element={<Dunkleosteus />} />
        <Route
          path="/maps/genesis2/electrophorus"
          element={<Electrophorus />}
        />
        <Route path="/maps/genesis2/featherlight" element={<Featherlight />} />
        <Route path="/maps/genesis2/ferox" element={<Ferox />} />
        <Route path="/maps/genesis2/gacha" element={<Gacha />} />
        <Route path="/maps/genesis2/gallimimus" element={<Gallimimus />} />
        <Route
          path="/maps/genesis2/giganotosaurus"
          element={<Giganotosaurus />}
        />
        <Route path="/maps/genesis2/glowtail" element={<Glowtail />} />
        <Route path="/maps/genesis2/hesperonis" element={<Hesperonis />} />
        <Route path="/maps/genesis2/hyaenodon" element={<Hyaenodon />} />
        <Route path="/maps/genesis2/ichthyornis" element={<Ichthyornis />} />
        <Route
          path="/maps/genesis2/ichthyosaurus"
          element={<Ichthyosaurus />}
        />
        <Route path="/maps/genesis2/iguanodon" element={<Iguanodon />} />
        <Route path="/maps/genesis2/jerboa" element={<Jerboa />} />
        <Route path="/maps/genesis2/kaprosuchus" element={<Kaprosuchus />} />
        <Route path="/maps/genesis2/kentrosaurus" element={<Kentrosaurus />} />
        <Route path="/maps/genesis2/lymantria" element={<Lymantria />} />
        <Route path="/maps/genesis2/lystrosaurus" element={<Lystrosaurus />} />
        <Route path="/maps/genesis2/maewing" element={<Maewing />} />
        <Route path="/maps/genesis2/mammoth" element={<Mammoth />} />
        <Route path="/maps/genesis2/managarmr" element={<Managarmr />} />
        <Route path="/maps/genesis2/manta" element={<Manta />} />
        <Route path="/maps/genesis2/mantis" element={<Mantis />} />
        <Route path="/maps/genesis2/megaloceros" element={<Megaloceros />} />
        <Route path="/maps/genesis2/megalodon" element={<Megalodon />} />
        <Route path="/maps/genesis2/megatherium" element={<Megatherium />} />
        <Route path="/maps/genesis2/mesopithecus" element={<Mesopithecus />} />
        <Route path="/maps/genesis2/microraptor" element={<Microraptor />} />
        <Route path="/maps/genesis2/mosasaurus" element={<Mosasaurus />} />
        <Route path="/maps/genesis2/moschops" element={<Moschops />} />
        <Route path="/maps/genesis2/otter" element={<Otter />} />
        <Route path="/maps/genesis2/oviraptor" element={<Oviraptor />} />
        <Route path="/maps/genesis2/ovis" element={<Ovis />} />
        <Route path="/maps/genesis2/pachy" element={<Pachycephalosaurus />} />
        <Route
          path="/maps/genesis2/pachyrhinosaurus"
          element={<Pachyrhinosaurus />}
        />
        <Route
          path="/maps/genesis2/paraceratherium"
          element={<Paraceratherium />}
        />
        <Route path="/maps/genesis2/parasaur" element={<Parasaur />} />
        <Route path="/maps/genesis2/pegomastax" element={<Pegomastax />} />
        <Route path="/maps/genesis2/phiomia" element={<Phiomia />} />
        <Route path="/maps/genesis2/plesiosaur" element={<Plesiosaur />} />
        <Route path="/maps/genesis2/pteranodon" element={<Pteranodon />} />
        <Route
          path="/maps/genesis2/pulmonoscorpius"
          element={<Pulmonoscorpius />}
        />
        <Route path="/maps/genesis2/purlovia" element={<Purlovia />} />
        <Route path="/maps/genesis2/allosaurus" element={<Allosaurus />} />
        <Route path="/maps/genesis2/brontosaurus" element={<Brontosaurus />} />
        <Route path="/maps/genesis2/carbonemys" element={<Carbonemys />} />
        <Route path="/maps/genesis2/carnotaurus" element={<Carnotaurus />} />
        <Route path="/maps/genesis2/daeodon" element={<Daeodon />} />
        <Route path="/maps/genesis2/dilophosaur" element={<Dilophosaur />} />
        <Route path="/maps/genesis2/direwolf" element={<Direwolf />} />
        <Route path="/maps/genesis2/equus" element={<Equus />} />
        <Route path="/maps/genesis2/gasbags" element={<Gasbags />} />
        <Route
          path="/maps/genesis2/giganotosaurus"
          element={<Giganotosaurus />}
        />
        <Route path="/maps/genesis2/megatherium" element={<Megatherium />} />
        <Route path="/maps/genesis2/parasaur" element={<Parasaur />} />
        <Route path="/maps/genesis2/procoptodon" element={<Procoptodon />} />
        <Route
          path="/maps/genesis2/quetzalcoatlus"
          element={<Quetzalcoatlus />}
        />
        <Route path="/maps/genesis2/snowowl" element={<SnowOwl />} />
        <Route path="/maps/genesis2/thylacoleo" element={<Thylacoleo />} />
        <Route path="/maps/genesis2/velonasaur" element={<Velonasaur />} />
        <Route path="/maps/genesis2/raptor" element={<Raptor />} />
        <Route path="/maps/genesis2/ravager" element={<Ravager />} />
        <Route path="/maps/genesis2/rex" element={<Rex />} />
        <Route path="/maps/genesis2/rollrat" element={<RollRat />} />
        <Route path="/maps/genesis2/sabertooth" element={<Sabertooth />} />
        <Route path="/maps/genesis2/sarcosuchus" element={<Sarcosuchus />} />
        <Route path="/maps/genesis2/shadowmane" element={<Shadowmane />} />
        <Route path="/maps/genesis2/shinehorn" element={<Shinehorn />} />
        <Route path="/maps/genesis2/spinosaurus" element={<Spinosaurus />} />
        <Route path="/maps/genesis2/stegosaurus" element={<Stegosaurus />} />
        <Route path="/maps/genesis2/tapejara" element={<Tapejara />} />
        <Route path="/maps/genesis2/terrorbird" element={<TerrorBird />} />
        <Route
          path="/maps/genesis2/therizinosaur"
          element={<Therizinosaur />}
        />
        <Route path="/maps/genesis2/thornydragon" element={<ThornyDragon />} />
        <Route path="/maps/genesis2/triceratops" element={<Triceratops />} />
        <Route path="/maps/genesis2/troodon" element={<Troodon />} />
        <Route path="/maps/genesis2/tusoteuthis" element={<Tusoteuthis />} />
        <Route path="/maps/genesis2/vulture" element={<Vulture />} />
        <Route path="/maps/genesis2/woollyrhino" element={<WoollyRhino />} />
        <Route path="/maps/genesis2/yutyrannus" element={<Yutyrannus />} />
      </Routes>
    </div>
  );
};

export default Genesis2Routes;
