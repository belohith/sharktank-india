import React from "react";
import { useState } from "react";
import SharkStatDetails from "./SharkStatDetails";

function SharkStats(stats) {
  const [activeTab, setActiveTab] = useState("season1");

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div>
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

        <button
          style={{ cursor: "pointer" }}
          className={`btn ${activeTab === "overall" ? "tab1" : "tab2"}`}
          onClick={() => handleTabClick("overall")}
        >
          Overall
        </button>
      </div>
      <div>
        {activeTab === "season1" && (
          // Content for Season 1 goes here
          <div>
            season 1
            <SharkStatDetails
              noepi={stats.noepi1}
              nopit={stats.nopit1}
              nodeal={stats.nodeal1}
              totalinv={stats.totalinv1}
              totalinvi={stats.totalinvi1}
              totalinvd={stats.totalinvd1}
              hightotalinv={stats.hightotalinv1}
              hightotalinvp = {stats.hightotalinvp1}
              lowtotalinv={stats.lowtotalinv1}
              lowtotalinvp={stats.lowtotalinvp1}
              totalequitytake = {stats.totalequitytake1}
              highequitytake = {stats.highequitytake1}
              highequitytakep = {stats.highequitytakep1}
              lowequitytake = {stats.lowequitytake1}
              lowequitytakep = {stats.lowequitytakep1}
              deals0 = {stats.deals01}
              deals1 = {stats.deals11}
              deals2 = {stats.deals21}
              deals3 = {stats.deals31}
              deals4 = {stats.deals41}
              deals5 = {stats.deals51}
              mostdeals = {stats.mostdeals1}
              leastdeals = {stats.leastdeals1}
              avgamount = {stats.avgamount1}
              debtdeals = {stats.debtdeals1}
              nodebtdeals = {stats.nodebtdeals1}
              avgdebt = {stats.avgdebt1}
              
            />
          </div>
        )}
        {activeTab === "season2" && (
          // Content for Season 2 goes here
          <div>
            season 2
            <SharkStatDetails
              noepi={stats.noepi2}
              nopit={stats.nopit2}
              nodeal={stats.nodeal2}
              totalinv={stats.totalinv2}
              totalinvi={stats.totalinvi2}
              totalinvd={stats.totalinvd2}
              hightotalinv={stats.hightotalinv2}
              hightotalinvp = {stats.hightotalinvp2}
              lowtotalinv={stats.lowtotalinv2}
              lowtotalinvp={stats.lowtotalinvp2}
              totalequitytake = {stats.totalequitytake2}
              highequitytake = {stats.highequitytake2}
              highequitytakep = {stats.highequitytakep2}
              lowequitytake = {stats.lowequitytake2}
              lowequitytakep = {stats.lowequitytakep2}
              deals0 = {stats.deals02}
              deals1 = {stats.deals12}
              deals2 = {stats.deals22}
              deals3 = {stats.deals32}
              deals4 = {stats.deals42}
              deals5 = {stats.deals52}
              mostdeals = {stats.mostdeals2}
              leastdeals = {stats.leastdeals2}
              avgamount = {stats.avgamount2}
              debtdeals = {stats.debtdeals2}
              nodebtdeals = {stats.nodebtdeals2}
              avgdebt = {stats.avgdebt2} />
          </div>
        )}

        {activeTab === "overall" && (
          // Content for Season 2 goes here
          <div>
            overall
            <SharkStatDetails 
              noepi={stats.noepio}
              nopit={stats.nopito}
              nodeal={stats.nodealo}
              totalinv={stats.totalinvo}
              totalinvi={stats.totalinvio}
              totalinvd={stats.totalinvdo}
              hightotalinv={stats.hightotalinvo}
              hightotalinvp = {stats.hightotalinvpo}
              lowtotalinv={stats.lowtotalinvo}
              lowtotalinvp={stats.lowtotalinvpo}
              totalequitytake = {stats.totalequitytakeo}
              highequitytake = {stats.highequitytakeo}
              highequitytakep = {stats.highequitytakepo}
              lowequitytake = {stats.lowequitytakeo}
              lowequitytakep = {stats.lowequitytakepo}
              deals0 = {stats.deals0o}
              deals1 = {stats.deals1o}
              deals2 = {stats.deals2o}
              deals3 = {stats.deals3o}
              deals4 = {stats.deals4o}
              deals5 = {stats.deals5o}
              mostdeals = {stats.mostdealso}
              leastdeals = {stats.leastdealso}
              avgamount = {stats.avgamounto}
              debtdeals = {stats.debtdealso}
              nodebtdeals = {stats.nodebtdealso}
              avgdebt = {stats.avgdebto}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default SharkStats;
