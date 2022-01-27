import React, { useEffect } from "react";

type MouseData = {
  x: number | null;
  y: number | null;
  screenX: number | null;
  screenY: number | null;
  pageX: number | null;
  pageY: number | null;
  clientX: number | null;
  clientY: number | null;
  movementX: number | null;
  movementY: number | null;
  offsetX: number | null;
  offsetY: number | null;
};

const initialMouseState: MouseData = {
  clientX: null,
  clientY: null,
  movementX: null,
  movementY: null,
  offsetX: null,
  offsetY: null,
  pageX: null,
  pageY: null,
  screenX: null,
  screenY: null,
  x: null,
  y: null,
};

const useMouse = (userOptions?: Partial<MouseData>) => {
  const [mousePosition, setMousePosition] = React.useState<MouseData>({
    ...initialMouseState,
    ...userOptions,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePosition(e);
    });

    return () => {
      document.removeEventListener("mousemove", (e) => {
        setMousePosition(e);
      });
    };
  }, []);

  return mousePosition;
};

export default useMouse;
