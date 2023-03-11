import React from "react";
import styles from "./style.css"

function SeasonStats(stats) {
  return (
    <div 
    >
      <div className="seasonssection"
      >
        <div className="stat-box1">
          <p>Number of Episodes</p>
          <p className="stat1">{stats.numberOfEpisodes}</p>
        </div>
        <div className="stat-box1">
          <p>First Aired</p>
          <p className="stat1">{stats.firstAired}</p>
        </div>
        <div className="stat-box1">
          <p>Last Aired</p>
          <p className="stat1">{stats.lastAired}</p>
        </div>
        <div className="stat-box1">
          <p>Host</p>
          <p className="stat1">{stats.host}</p>
        </div>
      </div>
      <div className="seasonssection"
      >
        <div className="stat-box1">
          <p>Number of Sharks</p>
          <p className="stat1">{stats.numberOfSharks}</p>
        </div>
        <div className="stat-box1">
          <p>Number of Pitches</p>
          <p className="stat1">{stats.numberOfPitches}</p>
        </div>
        <div className="stat-box1">
          <p>Total Amount of Money Spent</p>
          <p className="stat1">{stats.totalAmountInvested}</p>
          <p className="stat2">Invested: {stats.totalAmountInvestedi}</p>
          <p className="stat2">Debt: {stats.totalAmountInvestedd}</p>
        </div>
        <div className="stat-box1">
          <p>Total Number of Deals</p>
          <p className="stat1">{stats.totalNumberOfDeals}</p>
        </div>
      </div>
      <div className="seasonssection"
      >
        <div className="stat-box1">
          <p>Highest Valuation Asked ( in ₹ )</p>
          <p className="stat1">{stats.highvalueask}</p>
          <p className="stat2">{stats.highvalueaskp}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Valuation Asked ( in ₹ )</p>
          <p className="stat1">{stats.lowvalueask}</p>
          <p className="stat2">{stats.lowvalueaskp}</p>
        </div>
        <div className="stat-box1">
          <p>Highest Valuation Given ( in ₹ )</p>
          <p className="stat1">{stats.highvaluegive}</p>
          <p className="stat2">{stats.highvaluegives}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Valuation Given ( in ₹ )</p>
          <p className="stat1">{stats.lowvaluegive}</p>
          <p className="stat2">{stats.lowvaluegives}</p>
        </div>
      </div>
      <div className="seasonssection"
      >
        <div className="stat-box1">
          <p>Highest Amount Asked ( in ₹ )</p>
          <p className="stat1">{stats.highamountask}</p>
          <p className="stat2">{stats.highamountaskp}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Amount Asked ( in ₹ )</p>
          <p className="stat1">{stats.lowamountask}</p>
          <p className="stat2">{stats.lowamountaskp}</p>
        </div>
        <div className="stat-box1">
          <p>Highest Amount Given ( in ₹ )</p>
          <p className="stat1">{stats.highamountgive}</p>
          <p className="stat2">{stats.highamountgives}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Amount Given ( in ₹ )</p>
          <p className="stat1">{stats.lowamountgive}</p>
          <p className="stat2">{stats.lowamountgives}</p>
        </div>
      </div>
      <div className="seasonssection"
      
      >
        <div className="stat-box1">
          <p>Highest Equity Offered ( in % )</p>
          <p className="stat1">{stats.highequityoffer}</p>
          <p className="stat2">{stats.highequityofferp}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Equity Offered ( in % )</p>
          <p className="stat1">{stats.lowequityoffer}</p>
          <p className="stat2">{stats.lowequityofferp}</p>
        </div>
        <div className="stat-box1">
          <p>Highest Equity Taken ( in % )</p>
          <p className="stat1">{stats.highequitytake}</p>
          <p className="stat2">{stats.highequitytakes}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Equity Taken ( in % )</p>
          <p className="stat1">{stats.lowequitytake}</p>
          <p className="stat2">{stats.lowequitytakes}</p>
        </div>
      </div>
      <div className="seasonssection"
      >
        <div className="stat-box1">
          <p>Highest Total Money Spent ( in ₹ )</p>
          <p className="stat1">{stats.hightotalinv}</p>
          <p className="stat2">{stats.hightotalinvs}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Total Money Spent ( in ₹ )</p>
          <p className="stat1">{stats.lowtotalinv}</p>
          <p className="stat2">{stats.lowtotalinvs}</p>
        </div>
        <div className="stat-box1">
          <p>Highest Number of Deals</p>
          <p className="stat1">{stats.highnodeals}</p>
          <p className="stat2">{stats.highnodealss}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Number of Deals</p>
          <p className="stat1">{stats.lownodeals}</p>
          <p className="stat2">{stats.lownodealss}</p>
        </div>
      </div>
      <div
        className="seasonssection"
      >
        
        <div className="stat-box1">
          <p>Highest Number of Pitches Witnessed</p>
          <p className="stat1">{stats.highnoepi}</p>
          <p className="stat2">{stats.highnoepis}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Number of Pitches Witnessed</p>
          <p className="stat1">{stats.lownoepi}</p>
          <p className="stat2">{stats.lownoepis}</p>
        </div>
      </div>
    </div>
  );
}

export default SeasonStats;
