import React from "react";

function Map() {
  const fruits = ["Apple", "Banana", "Orange", "Grapes"];

  return (
    <>
      {fruits.map((fruit, index) => (
        <React.Fragment key={index}>
          <h3>{fruit}</h3>
        </React.Fragment>
      ))}
    </>
  );
}
export default Map;