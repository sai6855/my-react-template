import axios from "axios";
import { useState } from "react";
import AddPropstochild from "../common-code/Components/AddPropstochild";
import useApi from "../common-code/Hooks/useApi";
import useDebounce from "../common-code/Hooks/useDebounce";

type Item = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

const DebounceExample = () => {
  const [data, dispatch] = useApi([]);

  const [value, setValue] = useState("");

  useDebounce(
    () => {
      dispatch(fetchData, value);
    },
    [value],
    500,
  );

  const fetchData = async (value: string) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos`
    );
    return value
      ? response.data.filter((item: Item) => item.title.includes(value))
      : [];
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <AddPropstochild style={{ margin: "1rem" }}>
        {data.data.map((item: Item) => (
          <div key={item.id}> {item.title} </div>
        ))}
      </AddPropstochild>
    </div>
  );
};

export default DebounceExample;
