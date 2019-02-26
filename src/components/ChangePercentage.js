import React from "react";

const ChangePercentage = ({ value }) => {
  let text = `${(value * 100).toFixed(2)} %`;
  let style = {};
  let prefix;
  if (value > 0) {
    prefix = "+";
    style.color = "green";
  } else if (value < 0) {
    style.color = "red";
  } else {
    text = "---";
  }
  return (
    <span style={style}>
      {prefix} {text}
    </span>
  );
};

export default ChangePercentage;
