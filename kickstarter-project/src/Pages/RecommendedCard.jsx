import React from "react";

export const RecommendedCard = ({ item }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <img height="140px" width="180px" src={item.avatar} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{item.title} </div>
        <div>{(Number(item.funded) / Number(item.pledged)) * 100}% </div>
        <div>By: {item.by} </div>
        <div>Buttons </div>
      </div>
      <hr />
    </div>
  );
};
