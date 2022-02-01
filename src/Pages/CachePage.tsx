import React, { useEffect, useState } from "react";
import useCache from "../common-code/Hooks/Cache/useCache";

const CachePage = () => {
  const [toggle, setToggle] = useState(false);

  const { getCount, increase, decrease } = useCache();

  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.github.com/users/sai6855");
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return <div onClick={() => increase()}>{getCount()}</div>;
};

export default CachePage;
