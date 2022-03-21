import { useRef } from "react";
import useDetectOutsideClick from "../common-code/Hooks/useDetectOutsideClick";

const DetectOutside = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const isOutsideClicked = useDetectOutsideClick(ref);
  const isOutsideClicked2 = useDetectOutsideClick(ref2);

  return (
    <>
      <div
        style={{
          width: "10rem",
          height: "10rem",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
        ref={ref}
      >
        <p>
          {isOutsideClicked === null
            ? "Click me"
            : isOutsideClicked
            ? "Clicked outside"
            : "Clicked inside"}
        </p>
      </div>

      <div
        style={{
          width: "10rem",
          height: "10rem",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
        ref={ref2}
      >
        <p>
          {isOutsideClicked2 === null
            ? "Click me"
            : isOutsideClicked2
            ? "Clicked outside"
            : "Clicked inside"}
        </p>
      </div>
    </>
  );
};

export default DetectOutside;
