// src/components/DowryResult.js
import React from 'react';
import './DowryResult.css'; // Import the CSS

const DowryResult = ({ dowry }) => {
  return (
    <div className="dowry-result">
      <h3>Calculated Dowry:</h3>
      <p>${dowry.toLocaleString()}</p>
    </div>
  );
};

export default DowryResult;
