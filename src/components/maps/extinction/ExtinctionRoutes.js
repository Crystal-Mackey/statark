import {
  Achatina,
  Allosaurus,
  Ankylosaurus,
  Araneo,
  Archaeopteryx,
  Argentavis,
  Arthropluera,
  Baryonyx,
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
  Diplodocus,
  DireBear,
  Direwolf,
  Dodo,
  Doedicurus,
  Equus,
  Gallimimus,
  Giganotosaurus,
  Hesperonis,
  Hyaenodon,
  Ichthyornis,
  Iguanodon,
  Kairuku,
  Kaprosuchus,
  Kentrosaurus,
  Lystrosaurus,
  Mammoth,
  Megalania,
  Megaloceros,
  Megalosaurus,
  Megatherium,
  Mesopithecus,
  Microraptor,
  Moschops,
  Onyc,
  Otter,
  Oviraptor,
  Ovis,
  Pachycephalosaurus,
  Pachyrhinosaurus,
  Paraceratherium,
  Parasaur,
  Phiomia,
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
  Therizinosaur,
  Thylacoleo,
  Triceratops,
  Troodon,
  WoollyRhino,
  Yutyrannus,
} from "../island/index";

import { 
    Lymantria, Mantis, Morellatops, ThornyDragon
} from "../scorchedearth/index";

import {
  Gacha,
  Gasbags,
  Managarmr,
  SnowOwl,
  Velonasaur,
  Extinction,
} from "./index";

import { Routes, Route } from "react-router-dom";

const ExtinctionRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/maps/extinction" element={<Extinction />} />
        <Route path="/maps/extinction/achatina" element={<Achatina />} />
        <Route path="/maps/extinction/allosaurus" element={<Allosaurus />} />
        <Route
          path="/maps/extinction/ankylosaurus"
          element={<Ankylosaurus />}
        />
        <Route path="/maps/extinction/araneo" element={<Araneo />} />
        <Route
          path="/maps/extinction/archaeopteryx"
          element={<Archaeopteryx />}
        />
        <Route path="/maps/extinction/argentavis" element={<Argentavis />} />
        <Route
          path="/maps/extinction/arthropluera"
          element={<Arthropluera />}
        />
        <Route path="/maps/extinction/baryonyx" element={<Baryonyx />} />
        <Route path="/maps/extinction/beelzebufo" element={<Beelzebufo />} />
        <Route
          path="/maps/extinction/brontosaurus"
          element={<Brontosaurus />}
        />
        <Route path="/maps/extinction/carbonemys" element={<Carbonemys />} />
        <Route path="/maps/extinction/carnotaurus" element={<Carnotaurus />} />
        <Route path="/maps/extinction/castoroides" element={<Castoroides />} />
        <Route
          path="/maps/extinction/chalicotherium"
          element={<Chalicotherium />}
        />
        <Route path="/maps/extinction/compy" element={<Compy />} />
        <Route path="/maps/extinction/daeodon" element={<Daeodon />} />
        <Route path="/maps/extinction/dilophosaur" element={<Dilophosaur />} />
        <Route path="/maps/extinction/dimetrodon" element={<Dimetrodon />} />
        <Route path="/maps/extinction/dimorphodon" element={<Dimorphodon />} />
        <Route path="/maps/extinction/diplodocus" element={<Diplodocus />} />
        <Route path="/maps/extinction/direbear" element={<DireBear />} />
        <Route path="/maps/extinction/direwolf" element={<Direwolf />} />
        <Route path="/maps/extinction/dodo" element={<Dodo />} />
        <Route path="/maps/extinction/doedicurus" element={<Doedicurus />} />
        <Route path="/maps/extinction/equus" element={<Equus />} />
        <Route path="/maps/extinction/gacha" element={<Gacha />} />
        <Route path="/maps/extinction/gallimimus" element={<Gallimimus />} />
        <Route path="/maps/extinction/gasbags" element={<Gasbags />} />
        <Route
          path="/maps/extinction/giganotosaurus"
          element={<Giganotosaurus />}
        />
        <Route path="/maps/extinction/hesperonis" element={<Hesperonis />} />
        <Route path="/maps/extinction/hyaenodon" element={<Hyaenodon />} />
        <Route path="/maps/extinction/ichthyornis" element={<Ichthyornis />} />
        <Route path="/maps/extinction/iguanodon" element={<Iguanodon />} />
        <Route path="/maps/extinction/kairuku" element={<Kairuku />} />
        <Route path="/maps/extinction/kaprosuchus" element={<Kaprosuchus />} />
        <Route
          path="/maps/extinction/kentrosaurus"
          element={<Kentrosaurus />}
        />
        <Route path="/maps/extinction/lymantria" element={<Lymantria />} />
        <Route
          path="/maps/extinction/lystrosaurus"
          element={<Lystrosaurus />}
        />
        <Route path="/maps/extinction/mammoth" element={<Mammoth />} />
        <Route path="/maps/extinction/managarmr" element={<Managarmr />} />
        <Route path="/maps/extinction/mantis" element={<Mantis />} />
        <Route path="/maps/extinction/megalania" element={<Megalania />} />
        <Route path="/maps/extinction/megaloceros" element={<Megaloceros />} />
        <Route
          path="/maps/extinction/megalosaurus"
          element={<Megalosaurus />}
        />
        <Route path="/maps/extinction/megatherium" element={<Megatherium />} />
        <Route
          path="/maps/extinction/mesopithecus"
          element={<Mesopithecus />}
        />
        <Route path="/maps/extinction/microraptor" element={<Microraptor />} />
        <Route path="/maps/extinction/morellatops" element={<Morellatops />} />
        <Route path="/maps/extinction/moschops" element={<Moschops />} />
        <Route path="/maps/extinction/onyc" element={<Onyc />} />
        <Route path="/maps/extinction/otter" element={<Otter />} />
        <Route path="/maps/extinction/oviraptor" element={<Oviraptor />} />
        <Route path="/maps/extinction/ovis" element={<Ovis />} />
        <Route path="/maps/extinction/pachy" element={<Pachycephalosaurus />} />
        <Route
          path="/maps/extinction/pachyrhinosaurus"
          element={<Pachyrhinosaurus />}
        />
        <Route
          path="/maps/extinction/paraceratherium"
          element={<Paraceratherium />}
        />
        <Route path="/maps/extinction/parasaur" element={<Parasaur />} />
        <Route path="/maps/extinction/phiomia" element={<Phiomia />} />
        <Route path="/maps/extinction/procoptodon" element={<Procoptodon />} />
        <Route path="/maps/extinction/pteranodon" element={<Pteranodon />} />
        <Route
          path="/maps/extinction/pulmonoscorpius"
          element={<Pulmonoscorpius />}
        />
        <Route path="/maps/extinction/purlovia" element={<Purlovia />} />
        <Route
          path="/maps/extinction/quetzalcoatlus"
          element={<Quetzalcoatlus />}
        />
        <Route path="/maps/extinction/raptor" element={<Raptor />} />
        <Route path="/maps/extinction/rex" element={<Rex />} />
        <Route path="/maps/extinction/sabertooth" element={<Sabertooth />} />
        <Route path="/maps/extinction/sarcosuchus" element={<Sarcosuchus />} />
        <Route path="/maps/extinction/snowowl" element={<SnowOwl />} />
        <Route path="/maps/extinction/spinosaurus" element={<Spinosaurus />} />
        <Route path="/maps/extinction/stegosaurus" element={<Stegosaurus />} />
        <Route path="/maps/extinction/tapejara" element={<Tapejara />} />
        <Route
          path="/maps/extinction/therizinosaur"
          element={<Therizinosaur />}
        />
        <Route
          path="/maps/extinction/thornydragon"
          element={<ThornyDragon />}
        />
        <Route path="/maps/extinction/thylacoleo" element={<Thylacoleo />} />
        <Route path="/maps/extinction/triceratops" element={<Triceratops />} />
        <Route path="/maps/extinction/troodon" element={<Troodon />} />
        <Route path="/maps/extinction/velonasaur" element={<Velonasaur />} />
        <Route path="/maps/extinction/woollyrhino" element={<WoollyRhino />} />
        <Route path="/maps/extinction/yutyrannus" element={<Yutyrannus />} />
      </Routes>
    </div>
  );
};

export default ExtinctionRoutes;
