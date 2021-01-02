import React from "react";

export const Pagination = ({ currentPage, totalPages, handlePage }) => {
  const btnArray = new Array(totalPages).fill(0).map((_, index) => index + 1);
  // console.log(currentPage, totalPages);
  return (
    <>
      <div style={{ textAlign: "right" }}>
        {btnArray.map((btn) => (
          <button
            style={{ margin: "5px", border: "none" }}
            onClick={() => handlePage(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};
