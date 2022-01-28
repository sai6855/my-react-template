import React, { useEffect, useRef } from "react";

const useDebounce = (
  callback: () => void,
  timeout: number,
  dependencies: any[]
) => {
  const ref = useRef(false);

  const memoizedCallback = React.useCallback(() => {
    callback();

    //eslint-disable-next-line
  }, dependencies);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (ref.current) {
      timer = setTimeout(() => {
        memoizedCallback();
      }, timeout);
    }

    ref.current = true;

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };

    //eslint-disable-next-line
  }, [memoizedCallback, ...dependencies, timeout]);

  return "";
};

export default useDebounce;
