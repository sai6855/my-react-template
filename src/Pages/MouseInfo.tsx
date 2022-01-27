import React from "react";
import useMouse from "../common-code/Hooks/useMouse";

const MouseInfo = () => {
  const mousePosition = useMouse();

  console.log(mousePosition);

  return <div>Move your mouse</div>;
};

export default MouseInfo;
