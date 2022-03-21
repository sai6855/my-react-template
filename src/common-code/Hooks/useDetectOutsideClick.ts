import React, { useCallback, useEffect } from "react";

interface E extends MouseEvent {
  path?: any[];
}

const useDetectOutsideClick = (ref: React.MutableRefObject<any>) => {
  const [isOutsideClicked, setIsOutsideClicked] = React.useState<
    null | boolean
  >(null);
  const handleClick = useCallback(
    (e: E) => {
      const path = e.path || (e.composedPath && e.composedPath());

      if (path.includes(ref.current)) {
        setIsOutsideClicked(false);
      } else {
        setIsOutsideClicked(true);
      }
    },
    [ref]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return isOutsideClicked;
};

export default useDetectOutsideClick;
