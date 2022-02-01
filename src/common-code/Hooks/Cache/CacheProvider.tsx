import React, { ReactChild } from "react";

export const CacheContext = React.createContext({
  getCount: () => 0,
  increase: () => {},
  decrease: () => {},
} as { getCount: () => number; increase: () => void; decrease: () => void });

function CacheTemp() {
  const [count, setCount] = React.useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const getCount = () => {
    return count;
  };

  return {
    increase,
    decrease,
    getCount,
  };
}

const CacheProvider = ({ children }: { children: ReactChild }) => {
  const cacheTemp = CacheTemp();
  return (
    <CacheContext.Provider value={cacheTemp}>{children}</CacheContext.Provider>
  );
};

export default CacheProvider;
