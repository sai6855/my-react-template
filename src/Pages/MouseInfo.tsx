import React from "react";
import useMouse from "../common-code/Hooks/useMouse";

const MouseInfo = () => {
  const mousePosition = useMouse();

  console.log(mousePosition);

  return (
    <div>
      x: {mousePosition.x} y: {mousePosition.y}
    </div>
  );
};

export default MouseInfo;
