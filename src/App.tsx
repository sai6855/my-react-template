import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import InfiniteScroll from "./Pages/InfiniteScroll";
import MouseInfo from "./Pages/MouseInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div style={{ margin: "1rem" }}>
          <Link to="/">HomePage</Link>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/infinte-scroll" element={<InfiniteScroll />} />
          <Route path="/mouse-position" element={<MouseInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
