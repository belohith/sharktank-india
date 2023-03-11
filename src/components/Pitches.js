import React, { useState, useEffect } from "react";
import PitchDetails from "./PitchDetails";
import data1 from "./data_s1.json";
import data2 from "./data_s2.json";

function Pitches() {
  const [activeTab, setActiveTab] = useState("season1");

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  const [jsonData1, setJsonData1] = useState([]);
  const [jsonData2, setJsonData2] = useState([]);

  useEffect(() => {
    // fetch the JSON data and update the state
    fetch("./data_s1.json")
      .then((response) => response.json())
      .then((data) => setJsonData1(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // fetch the JSON data and update the state
    fetch("./data_s2.json")
      .then((response) => response.json())
      .then((data) => setJsonData2(data))
      .catch((error) => console.log(error));
  }, []);

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
      </div>
      <div>
        {activeTab === "season1" && (
          // Content for Season 1 goes here
          <div>
              <PitchDetails data={jsonData1} />
          </div>
        )}
        {activeTab === "season2" && (
          // Content for Season 2 goes here
          <div>
            <PitchDetails data={jsonData2} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Pitches;
