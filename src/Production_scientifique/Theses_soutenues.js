import React from "react";
import "../assets/css/ouvrages.css";
import PrDlimi from "../assets/images/PrDlimi.jpeg"
import PrRHALIBMYMOHAMEDLAHBIB from "../assets/images/PrRHALIBMYMOHAMEDLAHBIB.jpeg"
import PrZakariaBOUABIDI from "../assets/images/PrZakariaBOUABIDI.jpeg"
import SouadBenoun from "../assets/images/SouadBenoun.jpg"
import AbdelouahidKouchih from "../assets/images/AbdelouahidKouchih.png"
import { Link } from "react-router-dom";
export default function Theses_soutenues(){
    return(
        <>
         <div className="container">
            <img 
                src={AbdelouahidKouchih}
                
                className="photo" 
            />
            <div className="details">
                <h3 className="nom">Pr Abdelouahid Kouchih</h3>
                <ul className="ouvrages">
                    
                    <li>
                        ♦ Moutaa Elayyaty : « Les motivations et attentes de la clientèle marocaine vis‐à-visde la consommation collaborative », Fsjes – Ain Chok – Université Hassan II –
                        Casablanca (Année d'inscription : 2017/2018).
                        14 Juin 2023 : Coordination du séminaire sous le thème : "La Stabilité Financière Enjeu pour le développement économique du Maroc", Organisé le 14 juin 2023 par Bank Al-Maghrib en collaboration avec Faculté des Sciences Juridiques, Economiques et Sociales Ain Chok, Université Hassan II - Casablanca - Maroc.


                    </li><br></br>
                    <li>
                        ♦ Maryam Meddaoui : « Le marketing politique au Maroc: le rôle de l’éthique dans les campagnes électorales ». Fsjes – Ain Chok – Université Hassan II – Casablanca (Année d'inscription : 2017/2018).

                    </li> <br></br>
                   
                    <li>
                        ♦ Hind Benkirane : « Le marketing et le développement durable : quel impact sur l’image des marques des distributeurs ?  », Fsjes – Ain Chok – Université Hassan II – Casablanca (Année d'inscription : 2017/2018).

                    </li><br></br>
                    <li>
                        ♦ Hanan Mataa : « Pratique  du  marketing  digital  dans  les  réseaux  sociaux  et consumer empowerment », Fsjes – Ain Chok – Université Hassan II – Casablanca (Année d'inscription : 2020/2021).

                    </li><br></br>
                    <li>
                        ♦ Doha Lyoussi : « Le  fonctionnement du processus de digitalisation bancaire marocaine et son impact sur les relations clients : Analyse comparative et regards critiques à l'épreuve de l'expérience du marché international », Fsjes – Ain Chok – Université Hassan II – Casablanca (Année d'inscription : 2020/2021).
                    </li><br></br>
                    <li>
                        ♦ Youssef Akhssassi  :  « Étude des déterminants liés à l’écart entre l’attitude des consommateurs et le comportement effectif en contexte de la consommation socialement responsable par la mobilisation des apports de l’économie comportementale et le nudge marketing », Fsjes – Ain Chok – Université Hassan II – Casablanca (Année d'inscription : 2021/2022).
                    </li><br></br>
                    <li>
                        ♦ Ouissam Ahouzi : « L'impact du Marketing digital sur la croissance des entreprises marocaines »,  Fsjes  –  Ain  Chok  –  Université  Hassan  II  –  Casablanca  (Année d'inscription : 2022/2023).

                    </li><br></br>
                    
                </ul>
            </div>
            
        </div>
        </>
    )
}