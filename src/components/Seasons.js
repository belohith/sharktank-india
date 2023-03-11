import { useState } from "react";
import SeasonStats from "./SeasonStats";

function Seasons() {
  const [activeTab, setActiveTab] = useState("season1");

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div>
      <p style={{
        color: "#fadf71",
        fontFamily: "Impact",
        paddingTop: "5px",
        fontSize: "4rem",
        marginBottom: "20px"
      }}>SEASON STATS</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "season1" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("season1")}
        >
          Season 1
        </button>
        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "season2" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("season2")}
        >
          Season 2
        </button>
      </div>
      <div>
        {activeTab === "season1" && (
          // Content for Season 1 goes here
          <div>
            <SeasonStats
              numberOfEpisodes="35"
              firstAired="20 Dec 2021"
              lastAired="4 Feb 2022"
              host="Rannvijay Singha"
              numberOfSharks="7"
              numberOfPitches="117"
              totalAmountInvested="₹ 41.33 Crores"
              totalAmountInvestedi="₹ 38.32 Crores"
              totalAmountInvestedd="₹ 3.01 Crores"
              totalNumberOfDeals="65"
              highvalueask="₹ 1,200 Crores"
              highvalueaskp = "Gopal's 56"
              lowvalueask="₹ 100 "
              lowvalueaskp="Cocofit"
              highvaluegive="₹ 66.67 Crores"
              highvaluegives = "Revamp Moto (Aman, Anupam)"
              lowvaluegive="₹ 100"
              lowvaluegives = "Cocofit (Aman, Anupam, Namita)"
              highamountask="₹ 300 Crores"
              highamountaskp="Gopal's 56"
              lowamountask="₹ 5"
              lowamountaskp="Cocofit"
              highamountgive="₹ 1.5 Crores"
              highamountgives="Aas Vidyalaya (Ashneer, Namita, Peyush)"
              lowamountgive="₹ 5"
              lowamountgives="Cocofit (Aman, Anupam, Namita)"
              highequityoffer="25 %"
              highequityofferp="Gopal's 56"
              lowequityoffer="0.25 %"
              lowequityofferp="Qzense Labs"
              highequitytake="75 %"
              highequitytakes="Sid 07 Designs (Peyush)"
              lowequitytake="1 %"
              lowequitytakes="Otua (Ashneer)"
              hightotalinv ="₹ 9.358 Crores"
              hightotalinvs ="Aman Gupta"
              lowtotalinv ="₹ 1.2 Crores"
              lowtotalinvs ="Ghazal Alagh"
              highnodeals ="41"
              highnodealss ="Namita Thapar"
              lownodeals ="7"
              lownodealss ="Ghazal Alagh"
              highnoepi ="117/117"
              highnoepis ="Anupam Mittal"
              lownoepi ="26/117"
              lownoepis ="Ghazal Alagh"
              
            />
          </div>
        )}
        {activeTab === "season2" && (
          // Content for Season 2 goes here
          <div>
            <SeasonStats
              numberOfEpisodes="50"
              firstAired="2 Jan 2023"
              lastAired="10 Mar 2023"
              host="Rahul Dua"
              numberOfSharks="6"
              numberOfPitches="165"
              totalAmountInvested="₹ 81.16 Crores"
              totalAmountInvestedi="₹ 67.7 Crores"
              totalAmountInvestedd="₹ 13.46 Crores"
              totalNumberOfDeals="101"
              highvalueask="₹ 560 Crores"
              highvalueaskp = "Avimee Herbal"
              lowvalueask="₹ 1.67 Crores"
              lowvalueaskp="Same Notifications"
              highvaluegive="₹ 250 Crores"
              highvaluegives = "Stage OTT (Aman, Namita, Peyush)"
              lowvaluegive="₹ 1 Crore"
              lowvaluegives = "Girgit Store (Namita),  Ekatra (Amit, Peyush), Forever Modest (Amit, Anupam, Namita, Vineeta)"
              highamountask="₹ 10 Crores"
              highamountaskp="Kitsons"
              lowamountask="₹ 20 Lakhs"
              lowamountaskp="Girgit Store"
              highamountgive="₹ 2 Crores"
              highamountgives="Pharmallama (Aman, Amit, Anupam, Namita, Peyush), Medulance (Aman, Namita, Peyush), Unstop (Aman, Amit, Anupam, Namita)"
              lowamountgive="₹ 10 Lakhs"
              lowamountgives="Pabiben.com (Namita), iMumz (Peyush), Maisha (Amit)"
              highequityoffer="20 %"
              highequityofferp="Coezy Sleep"
              lowequityoffer="0.2 %"
              lowequityofferp="Hood"
              highequitytake="25 %"
              highequitytakes="HoloKitab (Namita)"
              lowequitytake="0.54 %"
              lowequitytakes="Hood (Aman, Peyush)"
              hightotalinv ="₹ 18.89 Crores"
              hightotalinvs ="Namita Thapar"
              lowtotalinv ="₹ 8.55 Crores"
              lowtotalinvs ="Amit Jain"
              highnodeals ="42"
              highnodealss ="Aman Gupta"
              lownodeals ="20"
              lownodealss ="Amit Jain"
              highnoepi ="165/165"
              highnoepis ="Aman Gupta, Anupam Mittal, Namita Thapar"
              lownoepi ="78/165"
              lownoepis ="Amit Jain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Seasons;
