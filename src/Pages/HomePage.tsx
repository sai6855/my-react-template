import React from "react";
import { Link } from "react-router-dom";
import AddPropstochild from "../common-code/Components/AddPropstochild";

const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <AddPropstochild style={{ margin: "0.5rem", padding: "0.5rem" }}>
        <Link to="/infinte-scroll">Home</Link>
        <Link to="/infinte-scroll">InfiniteScroll</Link>
        <Link to="/infinte-scroll">Mouse info</Link>
      </AddPropstochild>
    </div>
  );
};

export default HomePage;
