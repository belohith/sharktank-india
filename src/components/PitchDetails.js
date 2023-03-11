import React from "react";

function PitchDetails({ data }) {
  if (!data || data.length === 0) {
    return <p>Loading data...123</p>;
  }
  return (
    <div>
      {data.map((item) => (
        <div key={item["#"]}>
          <h2>{item["Company/Brand Name"]}</h2>
          <p>Product: {item.Product}</p>
          <p>Original Ask: {item["Original Ask"]}</p>
          <p>Final Deal: {item["Final Deal"]}</p>
          <p>Sector: {item.Sector}</p>
          <p>Sharks on Board: {item["Sharks on Board"]}</p>
          <p>Entrepreneurs/Founders: {item["Entrepreneurs/Founders"]}</p>
          <p>Twitter: {item["Twitter (Company)"]}</p>
          <p>LinkedIn: {item["LinkedIn (Company)"]}</p>
          <p>Instagram: {item["Instagram (Company)"]}</p>
          <p>Facebook: {item["Facebook (Company)"]}</p>
          <p>Youtube: {item["Youtube (Company)"]}</p>
          <p>Website: {item["Website (Company)"]}</p>
        </div>
      ))}
    </div>
  );
}

export default PitchDetails;