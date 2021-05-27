import React from "react";

const Rank = ({ name, userEntries }) => {
  return (
    <div>
      <div className="white f3">{`${name}, your current rank is...`}</div>
      <div className="white f3">{`${userEntries}`}</div>
    </div>
  );
};

export default Rank;
