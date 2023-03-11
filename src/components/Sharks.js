import { useState } from "react";
import SharkProfile from "./SharkProfile";
import SharkStats from "./SharkStats";
import aman from "./aman.jpg";
import amit from "./amit.jpg";
import ashneer from "./ashneer.jpg";
import anupam from "./anupam.jpg";
import ghazal from "./ghazal.jpg";
import namita from "./namita.jpg";
import peyush from "./peyush.jpg";
import vineeta from "./vineeta.jpg";

function Sharks() {
  const [activeTab, setActiveTab] = useState("aman");

  

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div style={{backgroundColor: "#0e0e0e"}}>
      <p style={{
        color: "#fadf71",
        fontFamily: "Impact",
        paddingTop: "5px",
        fontSize: "4rem",
        marginBottom: "20px"
      }}>SHARK STATS</p>
      <div className="seasonstab">
        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "aman" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("aman")}
        >
          Aman Gupta
        </button>
        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "amit" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("amit")}
        >
          Amit Jain
        </button>
        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "anupam" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("anupam")}
        >
          Anupam Mittal
        </button>
        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "ashneer" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("ashneer")}
        >
          Ashneer Grover
        </button>
        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "ghazal" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("ghazal")}
        >
          Ghazal Alagh
        </button>
        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "namita" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("namita")}
        >
          Namita Thapar
        </button>
        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "peyush" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("peyush")}
        >
          Peyush Bansal
        </button>
        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "vineeta" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("vineeta")}
        >
          Vineeta Singh
        </button>
      </div>
      <div>
        {activeTab === "aman" && (
          // Content for Season 1 goes here
          <div>
            <SharkProfile
              name="Aman Gupta"
              imageUrl={aman}
              education="CA at ICAI, MBA at ISB Hyderabad"
              occupation="Co Founder and CMO, boAt"
            />
            <SharkStats
              noepi1="29/35"
              nopit1="98/117"
              nodeal1="28"
              totalinv1="₹ 9.37 Crores"
              totalinvi1="₹ 8.87 Crores"
              totalinvd1="₹ 50 Lakhs"
              hightotalinv1="₹ 1 Crore"
              hightotalinvp1="Hammer Lifestyle"
              lowtotalinv1="₹ 1.66"
              lowtotalinvp1="Cocofit"
              totalequitytake1="160.26%"
              highequitytake1="40%"
              highequitytakep1="Hammer Lifestyle"
              lowequitytake1="0.75%"
              lowequitytakep1="Revamp Moto"
              deals01="5"
              deals11="10"
              deals21="7"
              deals31="3"
              deals41="3"
              deals51="0"
              mostdeals1="Ashneer, Namita (11)"
              leastdeals1="Ghazal (0)"
              avgamount1="94.67% / 5.33%"
              debtdeals1="1"
              nodebtdeals1="27"
              avgdebt1="96.43% / 3.57%"
              noepi2="50/50"
              nopit2="165/165"
              nodeal2="42"
              totalinv2="₹ 17.99 Crores"
              totalinvi2="₹ 15.73 Crores"
              totalinvd2="₹ 2.26 Crores"
              hightotalinv2="₹ 1 Crore"
              hightotalinvp2="Zoff"
              lowtotalinv2="₹ 6 Lakhs"
              lowtotalinvp2="Mahantam"
              totalequitytake2="91.19%"
              highequitytake2="10%"
              highequitytakep2="Manetain"
              lowequitytake2="0.2%"
              lowequitytakep2="Stage OTT"
              deals02="7"
              deals12="15"
              deals22="11"
              deals32="5"
              deals42="4"
              deals52="0"
              mostdeals2="Peyush (24)"
              leastdeals2="Amit (6)"
              avgamount2="87.46% / 12.54%"
              debtdeals2="6"
              nodebtdeals2="36"
              avgdebt2="85.72% / 14.28%"
              noepio="79/85"
              nopito="263/282"
              nodealo="70"
              totalinvo="₹ 27.36 Crores"
              totalinvio="₹ 24.6 Crores"
              totalinvdo="₹ 2.76 Crores"
              hightotalinvo="₹ 1 Crore"
              hightotalinvpo="Hammer Lifestyle, Zoff"
              lowtotalinvo="₹ 1.66"
              lowtotalinvpo="Cocofit"
              totalequitytakeo="251.45%"
              highequitytakeo="40%"
              highequitytakepo="Hammer Lifestyle"
              lowequitytakeo="0.2%"
              lowequitytakepo="Stage OTT"
              deals0o="12"
              deals1o="25"
              deals2o="18"
              deals3o="8"
              deals4o="7"
              deals5o="0"
              mostdealso="Peyush (33)"
              leastdealso="Ghazal (0)"
              avgamounto="91.06% / 8.94%"
              debtdealso="6"
              nodebtdealso="63"
              avgdebto="91.07% / 8.93%"
            />
          </div>
        )}
        {activeTab === "amit" && (
          // Content for Season 2 goes here
          <div>
            <SharkProfile
              name="Amit Jain"
              imageUrl={amit}
              education="B.Tech. at IIT Delhi"
              occupation="Co Founder and CEO at CarDekho"
            />
            <SharkStats
              noepi1="0"
              nopit1="0"
              nodeal1="0"
              totalinv1="0"
              totalinvi1="0"
              totalinvd1="0"
              hightotalinv1="0"
              hightotalinvp1="N/A"
              lowtotalinv1="0"
              lowtotalinvp1="N/A"
              totalequitytake1="0"
              highequitytake1="0"
              highequitytakep1="N/A"
              lowequitytake1="0"
              lowequitytakep1="N/A"
              deals01="0"
              deals11="0"
              deals21="0"
              deals31="0"
              deals41="0"
              deals51="0"
              mostdeals1="N/A"
              leastdeals1="N/A"
              avgamount1="N/A"
              debtdeals1="0"
              nodebtdeals1="0"
              avgdebt1="N/A"
              noepi2="23/50"
              nopit2="78/165"
              nodeal2="20"
              totalinv2="₹ 8.55 Crores"
              totalinvi2="₹ 7.2 Crores"
              totalinvd2="₹ 1.35 Crores"
              hightotalinv2="₹ 1 Crore"
              hightotalinvp2="Nish Hair"
              lowtotalinv2="₹ 5 Lakhs"
              lowtotalinvp2="Forever Modest"
              totalequitytake2="98.99%"
              highequitytake2="20%"
              highequitytakep2="Cakelicious, Angrakhaa"
              lowequitytake2="1%"
              lowequitytakep2="Unstop, Pharmallama, Maisha"
              deals02="10"
              deals12="4"
              deals22="1"
              deals32="3"
              deals42="2"
              deals52="0"
              mostdeals2="Namita (8)"
              leastdeals2="Vineeta (1)"
              avgamount2="84.23% / 15.77%"
              debtdeals2="3"
              nodebtdeals2="17"
              avgdebt2="85% / 15%"
              noepio="23/50"
              nopito="78/165"
              nodealo="20"
              totalinvo="₹ 8.55 Crores"
              totalinvio="₹ 7.2 Crores"
              totalinvdo="₹ 1.35 Crores"
              hightotalinvo="₹ 1 Crore"
              hightotalinvpo="Nish Hair"
              lowtotalinvo="₹ 5 Lakhs"
              lowtotalinvpo="Forever Modest"
              totalequitytakeo="98.99%"
              highequitytakeo="20%"
              highequitytakepo="Cakelicious, Angrakhaa"
              lowequitytakeo="1%"
              lowequitytakepo="Unstop, Pharmallama, Maisha"
              deals0o="10"
              deals1o="4"
              deals2o="1"
              deals3o="3"
              deals4o="2"
              deals5o="0"
              mostdealso="Namita (8)"
              leastdealso="Vineeta (1)"
              avgamounto="84.23% / 15.77%"
              debtdealso="3"
              nodebtdealso="17"
              avgdebto="85% / 15%"
            />
          </div>
        )}
        {activeTab === "anupam" && (
          // Content for Season 1 goes here
          <div>
            <SharkProfile
              name="Anupam Mittal"
              imageUrl={anupam}
              education="Business at Boston College USA"
              occupation="Founder and CEO at Shaadi.com"
            />
            <SharkStats
              noepi1="35/35"
              nopit1="117/117"
              nodeal1="24"
              totalinv1="₹ 5.48 Crores"
              totalinvi1="₹ 5.33 Crores"
              totalinvd1="₹ 15 Lakhs"
              hightotalinv1="₹ 50 Lakhs"
              hightotalinvp1="Paws India"
              lowtotalinv1="₹ 1.66"
              lowtotalinvp1="Cocofit"
              totalequitytake1="178.86%"
              highequitytake1="25%"
              highequitytakep1="Cosiq"
              lowequitytake1="0.75%"
              lowequitytakep1="Revamp Moto"
              deals01="2"
              deals11="9"
              deals21="6"
              deals31="3"
              deals41="4"
              deals51="0"
              mostdeals1="Peyush (12)"
              leastdeals1="Ghazal (3)"
              avgamount1="97.27% / 2.73%"
              debtdeals1="1"
              nodebtdeals1="23"
              avgdebt1="95.84% / 4.16%"
              noepi2="50/50"
              nopit2="165/165"
              nodeal2="26"
              totalinv2="₹ 9.97 Crores"
              totalinvi2="₹ 9.14 Crores"
              totalinvd2="₹ 82 Lakhs"
              hightotalinv2="₹ 1 Crore"
              hightotalinvp2="Zillionaire"
              lowtotalinv2="₹ 5 Lakhs"
              lowtotalinvp2="Forever Modest"
              totalequitytake2="129.48%"
              highequitytake2="20%"
              highequitytakep2="Sharma ji ka Aata, Raasa"
              lowequitytake2="0.16%"
              lowequitytakep2="Snitch"
              deals02="6"
              deals12="7"
              deals22="4"
              deals32="5"
              deals42="4"
              deals52="0"
              mostdeals2="Peyush, Vineeta (12)"
              leastdeals2="Amit (4)"
              avgamount2="91.73% / 8.27%"
              debtdeals2="3"
              nodebtdeals2="23"
              avgdebt2="88.46% / 11.54%"
              noepio="85/85"
              nopito="282/282"
              nodealo="50"
              totalinvo="₹ 15.45 Crores"
              totalinvio="₹ 14.47 Crores"
              totalinvdo="₹ 97 Lakhs"
              hightotalinvo="₹ 1 Crore"
              hightotalinvpo="Zillionaire"
              lowtotalinvo="₹ 1.66"
              lowtotalinvpo="Cocofit"
              totalequitytakeo="308.34%"
              highequitytakeo="25%"
              highequitytakepo="Cosiq"
              lowequitytakeo="0.16%"
              lowequitytakepo="Snitch"
              deals0o="8"
              deals1o="16"
              deals2o="10"
              deals3o="8"
              deals4o="8"
              deals5o="0"
              mostdealso="Peyush (24)"
              leastdealso="Ghazal (3)"
              avgamounto="94.5% / 5.5%"
              debtdealso="4"
              nodebtdealso="46"
              avgdebto="92.15% / 7.85%"
            />
          </div>
        )}
        {activeTab === "ashneer" && (
          // Content for Season 2 goes here
          <div>
            <SharkProfile
              name="Ashneer Grover"
              imageUrl={ashneer}
              education="B.Tech. at IIT Delhi, MBA at IIM Ahmedabad"
              occupation="Co Founder at BharatPe (ex)"
            />
            <SharkStats
              noepi1="29/35"
              nopit1="98/117"
              nodeal1="21"
              totalinv1="₹ 6.53 Crores"
              totalinvi1="₹ 5.39 Crores"
              totalinvd1="₹ 1.14 Crores"
              hightotalinv1="₹ 70 Lakhs"
              hightotalinvp1="Tagz Foods"
              lowtotalinv1="₹ 1 Lakh"
              lowtotalinvp1="Otua"
              totalequitytake1="93.25%"
              highequitytake1="25%"
              highequitytakep1="Booz Scooters"
              lowequitytake1="1%"
              lowequitytakep1="Event Beep"
              deals01="3"
              deals11="5"
              deals21="6"
              deals31="4"
              deals41="3"
              deals51="0"
              mostdeals1="Aman (11)"
              leastdeals1="Ghazal (1)"
              avgamount1="82.55% / 17.45%"
              debtdeals1="2"
              nodebtdeals1="19"
              avgdebt1="90.48% / 9.52%"
              noepi2="0"
              nopit2="0"
              nodeal2="0"
              totalinv2="0"
              totalinvi2="0"
              totalinvd2="0"
              hightotalinv2="0"
              hightotalinvp2="N/A"
              lowtotalinv2="0"
              lowtotalinvp2="N/A"
              totalequitytake2="0"
              highequitytake2="0"
              highequitytakep2="N/A"
              lowequitytake2="0"
              lowequitytakep2="N/A"
              deals02="0"
              deals12="0"
              deals22="0"
              deals32="0"
              deals42="0"
              deals52="0"
              mostdeals2="N/A"
              leastdeals2="N/A"
              avgamount2="N/A"
              debtdeals2="0"
              nodebtdeals2="0"
              avgdebt2="N/A"
              noepio="29/35"
              nopito="98/117"
              nodealo="21"
              totalinvo="₹ 6.53 Crores"
              totalinvio="₹ 5.39 Crores"
              totalinvdo="₹ 1.14 Crores"
              hightotalinvo="₹ 70 Lakhs"
              hightotalinvpo="Tagz Foods"
              lowtotalinvo="₹ 1 Lakh"
              lowtotalinvpo="Otua"
              totalequitytakeo="93.25%"
              highequitytakeo="25%"
              highequitytakepo="Booz Scooters"
              lowequitytakeo="1%"
              lowequitytakepo="Event Beep"
              deals0o="3"
              deals1o="5"
              deals2o="6"
              deals3o="4"
              deals4o="3"
              deals5o="0"
              mostdealso="Aman (11)"
              leastdealso="Ghazal (1)"
              avgamounto="82.55% / 17.45%"
              debtdealso="2"
              nodebtdealso="19"
              avgdebto="90.48% / 9.52%"
            />
          </div>
        )}
        {activeTab === "ghazal" && (
          // Content for Season 1 goes here
          <div>
            <SharkProfile
              name="Ghazal Alagh"
              imageUrl={ghazal}
              education="BCA at Panjab University"
              occupation="Co Founder and CIO at Mamaearth"
            />
            <SharkStats
              noepi1="8/35"
              nopit1="26/117"
              nodeal1="7"
              totalinv1="₹ 1.3 Crores"
              totalinvi1="₹ 1.3 Crores"
              totalinvd1="₹ 0"
              hightotalinv1="₹ 33.33 Lakhs"
              hightotalinvp1="Humpy A2"
              lowtotalinv1="₹ 25.25"
              lowtotalinvp1="Watt Technovations"
              totalequitytake1="46.7%"
              highequitytake1="17.5%"
              highequitytakep1="The Sass Bar"
              lowequitytake1="1%"
              lowequitytakep1="Watt Technovations"
              deals01="0"
              deals11="1"
              deals21="3"
              deals31="2"
              deals41="1"
              deals51="0"
              mostdeals1="Vineeta (5)"
              leastdeals1="Aman (0)"
              avgamount1="100% / 0%"
              debtdeals1="0"
              nodebtdeals1="7"
              avgdebt1="100% / 0%"
              noepi2="0"
              nopit2="0"
              nodeal2="0"
              totalinv2="0"
              totalinvi2="0"
              totalinvd2="0"
              hightotalinv2="0"
              hightotalinvp2="N/A"
              lowtotalinv2="0"
              lowtotalinvp2="N/A"
              totalequitytake2="0"
              highequitytake2="0"
              highequitytakep2="N/A"
              lowequitytake2="0"
              lowequitytakep2="N/A"
              deals02="0"
              deals12="0"
              deals22="0"
              deals32="0"
              deals42="0"
              deals52="0"
              mostdeals2="N/A"
              leastdeals2="N/A"
              avgamount2="N/A"
              debtdeals2="0"
              nodebtdeals2="0"
              avgdebt2="N/A"
              noepio="8/35"
              nopito="26/117"
              nodealo="7"
              totalinvo="₹ 1.3 Crores"
              totalinvio="₹ 1.3 Crores"
              totalinvdo="₹ 0"
              hightotalinvo="₹ 33.33 Lakhs"
              hightotalinvpo="Humpy A2"
              lowtotalinvo="₹ 25.25"
              lowtotalinvpo="Watt Technovations"
              totalequitytakeo="46.7%"
              highequitytakeo="17.5%"
              highequitytakepo="The Sass Bar"
              lowequitytakeo="1%"
              lowequitytakepo="Watt Technovations"
              deals0o="0"
              deals1o="1"
              deals2o="3"
              deals3o="2"
              deals4o="1"
              deals5o="0"
              mostdealso="Vineeta (5)"
              leastdealso="Aman (0)"
              avgamounto="100% / 0%"
              debtdealso="0"
              nodebtdealso="7"
              avgdebto="100% / 0%"
            />
          </div>
        )}
        {activeTab === "namita" && (
          // Content for Season 2 goes here
          <div>
            <SharkProfile
              name="Namita Thapar"
              imageUrl={namita}
              education="CA at ICAI, MBA at Duke USA"
              occupation="Executive Director at Emcure Pharmaceuticals Ltd."
            />
            <SharkStats
              noepi1="32/35"
              nopit1="106/117"
              nodeal1="41"
              totalinv1="₹ 6.48 Crores"
              totalinvi1="₹ 6.48 Crores"
              totalinvd1="₹ 0"
              hightotalinv1="₹ 75 Lakhs"
              hightotalinvp1="Auli Lifestyle"
              lowtotalinv1="₹ 1.66"
              lowtotalinvp1="Cocofit"
              totalequitytake1="134.78%"
              highequitytake1="25%"
              highequitytakep1="Colour Me Mad"
              lowequitytake1="1%"
              lowequitytakep1="Watt Technovations, Annie"
              deals01="4"
              deals11="6"
              deals21="5"
              deals31="3"
              deals41="4"
              deals51="0"
              mostdeals1="Aman (11)"
              leastdeals1="Ghazal (4)"
              avgamount1="100% / 0%"
              debtdeals1="0"
              nodebtdeals1="22"
              avgdebt1="100% / 0%"
              noepi2="50/50"
              nopit2="165/165"
              nodeal2="41"
              totalinv2="₹ 18.89 Crores"
              totalinvi2="₹ 13.89 Crores"
              totalinvd2="₹ 5 Crores"
              hightotalinv2="₹ 1 Crore"
              hightotalinvp2="Janitri"
              lowtotalinv2="₹ 5 Lakhs"
              lowtotalinvp2="Forever Modest"
              totalequitytake2="158.01%"
              highequitytake2="25%"
              highequitytakep2="HoloKitab"
              lowequitytake2="0.2%"
              lowequitytakep2="Stage OTT"
              deals02="16"
              deals12="7"
              deals22="9"
              deals32="5"
              deals42="4"
              deals52="0"
              mostdeals2="Aman (17)"
              leastdeals2="Amit, Anupam (8)"
              avgamount2="73.52% / 26.48%"
              debtdeals2="12"
              nodebtdeals2="29"
              avgdebt2="70.73% / 29.27%"
              noepio="82/85"
              nopito="271/282"
              nodealo="82"
              totalinvo="₹ 25.37 Crores"
              totalinvio="₹ 20.37 Crores"
              totalinvdo="₹ 5 Crores"
              hightotalinvo="₹ 1 Crore"
              hightotalinvpo="Janitri"
              lowtotalinvo="₹ 1.66"
              lowtotalinvpo="Cocofit"
              totalequitytakeo="292.79%"
              highequitytakeo="25%"
              highequitytakepo="Colour Me Mad, HoloKitab"
              lowequitytakeo="0.2%"
              lowequitytakepo="Stage OTT"
              deals0o="20"
              deals1o="13"
              deals2o="14"
              deals3o="8"
              deals4o="8"
              deals5o="0"
              mostdealso="Aman (28)"
              leastdealso="Ghazal (4)"
              avgamounto="86.76% / 13.24%"
              debtdealso="12"
              nodebtdealso="51"
              avgdebto="85.37% / 14.63%"
            />
          </div>
        )}
        {activeTab === "peyush" && (
          // Content for Season 1 goes here
          <div>
            <SharkProfile
              name="Peyush Bansal"
              imageUrl={peyush}
              education="BE at McGill University Canada, MPEFB at IIM Bangalore"
              occupation="Co Founder and CEO at Lenskart.com"
            />
            <SharkStats
              noepi1="26/35"
              nopit1="88/117"
              nodeal1="27"
              totalinv1="₹ 8.56 Crores"
              totalinvi1="₹ 7.64 Crores"
              totalinvd1="₹ 92 Lakhs"
              hightotalinv1="₹ 1 Crore"
              hightotalinvp1="Insurance Samadhan"
              lowtotalinv1="₹ 25.25"
              lowtotalinvp1="Watt Technovations"
              totalequitytake1="315.86%"
              highequitytake1="75%"
              highequitytakep1="Sid07 Designs"
              lowequitytake1="1%"
              lowequitytakep1="Event Beep, Watt Technovations, Annie"
              deals01="7"
              deals11="4"
              deals21="10"
              deals31="3"
              deals41="3"
              deals51="0"
              mostdeals1="Anupam (12)"
              leastdeals1="Vineeta (3)"
              avgamount1="89.26% / 10.74%"
              debtdeals1="4"
              nodebtdeals1="23"
              avgdebt1="85.18% / 14.82%"
              noepi2="44/50"
              nopit2="146/165"
              nodeal2="40"
              totalinv2="₹ 16.05 Crores"
              totalinvi2="₹ 13.90 Crores"
              totalinvd2="₹ 2.15 Crores"
              hightotalinv2="₹ 1 Crore"
              hightotalinvp2="NeoMotion"
              lowtotalinv2="₹ 6 Lakhs"
              lowtotalinvp2="Mahantam"
              totalequitytake2="99.27%"
              highequitytake2="10%"
              highequitytakep2="Singh Styled, CureSee, Ekatra, ABC Fitness Firm"
              lowequitytake2="0.2%"
              lowequitytakep2="Stage OTT"
              deals02="7"
              deals12="16"
              deals22="8"
              deals32="5"
              deals42="4"
              deals52="0"
              mostdeals2="Aman (24)"
              leastdeals2="Amit (4)"
              avgamount2="86.61% / 13.39%"
              debtdeals2="5"
              nodebtdeals2="35"
              avgdebt2="87.5% / 12.5%"
              noepio="70/85"
              nopito="234/282"
              nodealo="67"
              totalinvo="₹ 24.61 Crores"
              totalinvio="₹ 21.54 Crores"
              totalinvdo="₹ 3.07 Crores"
              hightotalinvo="₹ 1 Crore"
              hightotalinvpo="Insurance Samadhan, NeoMotion"
              lowtotalinvo="₹ 25.25"
              lowtotalinvpo="Watt Technovations"
              totalequitytakeo="415.13%"
              highequitytakeo="75%"
              highequitytakepo="Sid07 Designs"
              lowequitytakeo="0.2%"
              lowequitytakepo="Stage OTT"
              deals0o="14"
              deals1o="20"
              deals2o="18"
              deals3o="8"
              deals4o="7"
              deals5o="0"
              mostdealso="Aman (33)"
              leastdealso="Ghazal, Amit (4)"
              avgamounto="87.94% / 12.06%"
              debtdealso="9"
              nodebtdealso="58"
              avgdebto="86.34% / 13.66%"
            />
          </div>
        )}
        {activeTab === "vineeta" && (
          // Content for Season 2 goes here
          <div>
            <SharkProfile
              name="Vineeta Singh"
              imageUrl={vineeta}
              education="B.Tech. at IIT Madras, MBA at IIM Ahmedabad"
              occupation="Co Founder and CEO at Sugar Cosmetics"
            />
            <SharkStats
              noepi1="20/35"
              nopit1="102/117"
              nodeal1="15"
              totalinv1="₹ 3.58 Crores"
              totalinvi1="₹ 3.28 Crores"
              totalinvd1="₹ 30 Lakhs"
              hightotalinv1="₹ 40 Lakhs"
              hightotalinvp1="Kabaddi Adda"
              lowtotalinv1="₹ 10 Lakhs"
              lowtotalinvp1="Jain Shikanji, Nomad Food Project"
              totalequitytake1="144.03%"
              highequitytake1="25%"
              highequitytakep1="Cosiq, Booz Scooters"
              lowequitytake1="1.2%"
              lowequitytakep1="Sunfox Technologies"
              deals01="1"
              deals11="5"
              deals21="5"
              deals31="2"
              deals41="2"
              deals51="0"
              mostdeals1="Anupam, Ashneer (6)"
              leastdeals1="Peyush (3)"
              avgamount1="91.63% / 8.37%"
              debtdeals1="1"
              nodebtdeals1="14"
              avgdebt1="93.33% / 6.67%"
              noepi2="36/50"
              nopit2="118/165"
              nodeal2="25"
              totalinv2="₹ 9.68 Crores"
              totalinvi2="₹ 7.82 Crores"
              totalinvd2="₹ 1.86 Crores"
              hightotalinv2="₹ 1 Crore"
              hightotalinvp2="Green Snack Co."
              lowtotalinv2="₹ 5 Lakhs"
              lowtotalinvp2="Forever Modest"
              totalequitytake2="101.46%"
              highequitytake2="18%"
              highequitytakep2="SoupX"
              lowequitytake2="0.3%"
              lowequitytakep2="Snitch"
              deals02="5"
              deals12="7"
              deals22="6"
              deals32="5"
              deals42="2"
              deals52="0"
              mostdeals2="Anupam (12)"
              leastdeals2="Amit (1)"
              avgamount2="80.73% / 19.27%"
              debtdeals2="7"
              nodebtdeals2="18"
              avgdebt2="72% / 28%"
              noepio="56/85"
              nopito="220/282"
              nodealo="40"
              totalinvo="₹ 13.26 Crores"
              totalinvio="₹ 11.1 Crores"
              totalinvdo="₹ 2.16 Crores"
              hightotalinvo="₹ 1 Crore"
              hightotalinvpo="Green Snack Co"
              lowtotalinvo="₹ 5 Lakhs"
              lowtotalinvpo="Forever Modest"
              totalequitytakeo="245.49%"
              highequitytakeo="25%"
              highequitytakepo="Cosiq, Booz Scooters"
              lowequitytakeo="0.3%"
              lowequitytakepo="Snitch"
              deals0o="6"
              deals1o="12"
              deals2o="11"
              deals3o="7"
              deals4o="4"
              deals5o="0"
              mostdealso="Anupam (18)"
              leastdealso="Amit (1)"
              avgamounto="86.18% / 13.82%"
              debtdealso="8"
              nodebtdealso="32"
              avgdebto="82.67% / 17.33%"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Sharks;
