import { BrowserRouter, Route,  Routes } from "react-router-dom";


import React from "react";
import Conference from "./Production_scientifique/Conference";
import Projets_recherche from "./Production_scientifique/Projets_recherche";

import Accueil from "./Accueil/Accueil";
import Association from "./Apropos/Association";
import { Equipe_Recherche } from "./Apropos/Equipe_Recherche";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import Organigramme from "./Apropos/Organigramme";
import Presentation_Generale from "./Apropos/Presentation_Generale";
import Reglement_interieur from "./ReglementInterieur/ReglementInterieur";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Galerie from "./Galerie/Galerie";
import Login from "./Login/Login";
import Header from "./NavBar/Header";
import Partenariat_internationale from "./Partenariat/Partenariat_internationale";
import Partenariat_nationale from "./Partenariat/Partenariat_nationale";
import Communication from "./Production_scientifique/Communication";
import Ouvrages from "./Production_scientifique/Ouvrages";
import Publication_indexés from "./Production_scientifique/Publication_indexés";
import Theses_soutenues from "./Production_scientifique/Theses_soutenues";
import Members from "./Members/members";
import ResetPassword from "./Login/ResetPassword"
import Dashboard from "./Dashboard/dashboard";
import Membredash from './Dashboard/membredash';
import Evenementdash from "./Dashboard/evenementdash";
import Production from "./Dashboard/production";
import EvenementRecent from "./Evenement/evenementRecent";
import EvenementAvenir from "./Evenement/evenementsAvenir";

function Layout() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/members" element={<Members />} />
        <Route path="/association" element={<Association />} />
        <Route path="/equipe_recherche" element={<Equipe_Recherche />} />
        <Route path="/organigramme" element={<Organigramme />} />
        <Route path="/presentation_generale" element={<Presentation_Generale />}/>
        <Route path="/ReglementInterieur" element={<Reglement_interieur />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/conference" element={<Conference/>}/>
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/echelle_internationale"element={<Partenariat_internationale />}/>
        <Route path="/echelle_nationale" element={<Partenariat_nationale />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/ouvrages" element={<Ouvrages />} />
        <Route path="/projets_recherche" element={<Projets_recherche />} />
        <Route path="/publication_indexés" element={<Publication_indexés />} />
        <Route path="/theses_soutenues" element={<Theses_soutenues />} />
        <Route path="/membredash" element={<Membredash/>} />
        <Route path="/evenementdash" element={<Evenementdash/>} />
        <Route path="/production" element={<Production/>} />
        <Route path="/EvenementRecent" element={<EvenementRecent/>} />
        <Route path="/EvenementAvenir" element={<EvenementAvenir/>} />

      </Routes>
      <Footer />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
export default App;
