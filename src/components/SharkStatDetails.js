function SharkStatDetails(stats) {
    return ( 
        <div>
            <div className="seasonssection"
      > 
        <div className="stat-box1">
          <p>Number of Episodes Appeared</p>
          <p className="stat1">{stats.noepi}</p>
        </div>
        <div className="stat-box1">
          <p>Number of Pitches Witnessed</p>
          <p className="stat1">{stats.nopit}</p>
        </div>
        <div className="stat-box1">
          <p>Number of Deals Made</p>
          <p className="stat1">{stats.nodeal}</p>
        </div>
      </div>
      <div
        className="seasonssection"
      >
        <div className="stat-box1">
          <p>Total Money Spent ( in ₹ )</p>
          <p className="stat1">{stats.totalinv}</p>
          <p className="stat2">Invested: {stats.totalinvi}</p>
          <p className="stat2">Debt: {stats.totalinvd}</p>
        </div>
        <div className="stat-box1">
          <p>Highest Amount Invested Individually ( in ₹ )</p>
          <p className="stat1">{stats.hightotalinv}</p>
          <p className="stat2">{stats.hightotalinvp}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Amount Invested Individually ( in ₹ )</p>
          <p className="stat1">{stats.lowtotalinv}</p>
          <p className="stat2">{stats.lowtotalinvp}</p>
        </div>
      </div>
      <div
        className="seasonssection"
      >
        <div className="stat-box1">
          <p>Total Equity Stakes Owned ( in % )</p>
          <p className="stat1">{stats.totalequitytake}</p>
        </div>
        <div className="stat-box1">
          <p>Highest Equity Taken ( in % )</p>
          <p className="stat1">{stats.highequitytake}</p>
          <p className="stat2">{stats.highequitytakep}</p>
        </div>
        <div className="stat-box1">
          <p>Lowest Equity Taken ( in % )</p>
          <p className="stat1">{stats.lowequitytake}</p>
          <p className="stat2">{stats.lowequitytakep}</p>
        </div>
      </div>
      <div
        className="seasonssection"
      >
        <div className="stat-box1">
          <p>Solo Deals</p>
          <p className="stat1">{stats.deals0}</p>
        </div>
        <div className="stat-box1">
          <p>Deals with 1 shark</p>
          <p className="stat1">{stats.deals1}</p>
        </div>
        <div className="stat-box1">
          <p>Deals with 2 sharks</p>
          <p className="stat1">{stats.deals2}</p>
        </div>
      </div>
      <div
        className="seasonssection"
      >
        <div className="stat-box1">
          <p>Deals with 3 sharks</p>
          <p className="stat1">{stats.deals3}</p>
        </div>
        <div className="stat-box1">
          <p>Deals with 4 sharks</p>
          <p className="stat1">{stats.deals4}</p>
        </div>
        <div className="stat-box1">
          <p>Deals with 5 sharks</p>
          <p className="stat1">{stats.deals5}</p>
        </div>
      </div>
      <div
        className="seasonssection"
      >
        <div className="stat-box1">
          <p>Most Deals with</p>
          <p className="stat1">{stats.mostdeals}</p>
        </div>
        <div className="stat-box1">
          <p>Least Deals with</p>
          <p className="stat1">{stats.leastdeals}</p>
        </div>
        <div className="stat-box1">
          <p>Money Spent Ratio on Investment/ Debt</p>
          <p className="stat1">{stats.avgamount}</p>
        </div>
      </div>
      <div
        className="seasonssection"
      >
        
        <div className="stat-box1">
          <p>Deals with Debt</p>
          <p className="stat1">{stats.debtdeals}</p>
        </div>
        <div className="stat-box1">
          <p>Deals without Debt</p>
          <p className="stat1">{stats.nodebtdeals}</p>
        </div>
        <div className="stat-box1">
          <p>Deals Ratio without Debt/ with Debt</p>
          <p className="stat1">{stats.avgdebt}</p>
        </div>
      </div>
        </div>
     );
}

export default SharkStatDetails;