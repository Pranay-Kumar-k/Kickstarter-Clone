import React from "react";


export const RecommendedCard = ({ item }) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <img style={{ width: "140px", height: "100px", marginRight: "10px" }} src={item.avatar} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", margin: "10px 0px" }}>
          <div>{item.title} </div>
          <div>{(Number(item.funded) / Number(item.pledged)) * 100}% </div>
          <div>By: {item.by} </div>
        </div>
      </div>
      <div style={{ backgroundColor: "grey", height: "1px", width: "100%",margin:"5px 0px" }}></div>
    </div>
  );
};
