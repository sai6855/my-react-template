import React, { useRef } from "react";
import ScrollTo from "../common-code/Hooks/useScroll";

const Scroll = () => {
  const ref = useRef(null);
  const pinkref = useRef(null);
  const redref = useRef(null);

  return (
    <div>
      <div onClick={() => ScrollTo.bottom()}>Scroll to bottom</div>
      <div
        onClick={() => ScrollTo.element(ref)}
        style={{ width: "100vh", height: "200vh", backgroundColor: "black" }}
      />
      <div ref={ref} id="orange" style={{ padding: "3rem" }}>
        <div
          style={{ width: "100vh", height: "200vh", backgroundColor: "orange" }}
        />
      </div>
      <div onClick={() => ScrollTo.element(redref)}>Scroll to red</div>
      <div ref={pinkref} style={{ padding: "3rem" }}>
        <div
          style={{ width: "100vh", height: "200vh", backgroundColor: "pink" }}
        />
      </div>
      <div ref={redref} style={{ padding: "3rem" }}>
        <div
          style={{ width: "100vh", height: "200vh", backgroundColor: "red" }}
        />
      </div>
      <div onClick={() => ScrollTo.element(ref)}>Scroll to orange</div>
      <div onClick={() => ScrollTo.element(pinkref)}>Scroll to pink</div>
      <div onClick={() => ScrollTo.top()}>Scroll to top</div>
    </div>
  );
};

export default Scroll;
