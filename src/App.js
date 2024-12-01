import { BrowserRouter, Route,Router, Routes } from 'react-router-dom';
import React from 'react';
import Accueil from './Accueil/Accueil';
import Association from './Apropos/Association';
import Equipe_Recherche from './Apropos/Equipe_Recherche';
import Organigramme from './Apropos/Organigramme';
import Presentation_Generale from './Apropos/Presentation_Generale';
import Reglement_interieur from './Apropos/Reglement_interieur';
import Contact from './Contact/Contact';
import Autres from './Evenement/Autres';
import Colloques from './Evenement/Colloques';
import Conferences from './Evenement/Conferences';
import Journees_scientifique from './Evenement/Journees_scientifique';
import Tables_rondes from './Evenement/Tables_rondes';
import Workshops_formation from './Evenement/Workshops_formation';
import Footer from './Footer/Footer';
import Galerie from './Galerie/Galerie';
import Login from './Login/Login';
import Header from './NavBar/Header';
import Echelle_internationale from './Partenariat/Echelle_internationale';
import Echelle_nationale from './Partenariat/Echelle_nationale';
import Communication from './Production_scientifique/Communication';
import Ouvrages from './Production_scientifique/Ouvrages';
import Projets_recherche from './Production_scientifique/Projets_recherche';
import Publication_indexés from './Production_scientifique/Publication_indexés';
import Theses_soutenues from './Production_scientifique/Theses_soutenues';


function Layout() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/association" element={<Association/>}/>
      <Route path="/equipe_recherche" element={<Equipe_Recherche/>}/>
      <Route path="/organigramme" element={<Organigramme/>}/>
      <Route path="/presentation_generale" element={<Presentation_Generale/>}/>
      <Route path="/reglement_interieur" element={<Reglement_interieur/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/autres" element={<Autres/>}/>
      <Route path="/colloques" element={<Colloques/>}/>
      <Route path="/conferences" element={<Conferences/>}/>
      <Route path="/journees_scientifique" element={<Journees_scientifique/>}/>
      <Route path="/tables_rondes" element={<Tables_rondes/>}/>
      <Route path="/workshops_formation" element={<Workshops_formation/>}/>
      <Route path="/galerie" element={<Galerie/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/echelle_internationale" element={<Echelle_internationale/>}/>
      <Route path="/echelle_nationale" element={<Echelle_nationale/>}/>
      <Route path="/communication" element={<Communication/>}/>
      <Route path="/ouvrages" element={<Ouvrages/>}/>
      <Route path="/projets_recherche" element={<Projets_recherche/>}/>
      <Route path="/publication_indexés" element={<Publication_indexés/>}/>
      <Route path="/theses_soutenues" element={<Theses_soutenues/>}/>
    </Routes>
    <Footer/>
    </>
  );
}
function App(){
  return(
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
export default App;
