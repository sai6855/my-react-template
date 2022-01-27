import axios from "axios";
import React from "react";
import useApi from "../common-code/Hooks/useApi";

type Item = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

const DebounceExample = () => {
  const [data, dispatch] = useApi();

  const fetchData = () =>
    axios.get("https://jsonplaceholder.typicode.com/todos");

  console.log(data);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        onChange={(e) =>
          dispatch(fetchData, {
            onSuccess: (res) =>
              res.data.filter((item: Item) =>
                item.title.includes(e.target.value)
              ),
          })
        }
      />
    </div>
  );
};

export default DebounceExample;
