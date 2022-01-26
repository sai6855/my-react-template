import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import InfiniteScroll from "./Pages/InfiniteScroll";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">
          <div style={{ marginBottom: "2rem" }}>Home</div>
        </Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/infinte-scroll" element={<InfiniteScroll />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
