import React, { useContext } from "react";
import { CacheContext } from "./CacheProvider";

const useCache = () => {
  return useContext(CacheContext);
};

export default useCache;
