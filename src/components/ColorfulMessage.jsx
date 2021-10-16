import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentLeadyStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentLeadyStyle}>{children}</p>;
};

export default ColorfulMessage;
