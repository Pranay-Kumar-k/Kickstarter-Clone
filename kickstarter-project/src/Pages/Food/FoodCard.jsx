import React from "react";

export const FoodCard = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item.avatar} />
      </div>
      <h3>{item.title} </h3>
      <div>{item.summary} </div>
      <div>By: {item.by} </div>
      <br />
    </div>
  );
};
