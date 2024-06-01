import React from "react";

function DisplayData({ submittedData }) {
  return (
    <div>
      <h2>Submitted Data</h2>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayData;
