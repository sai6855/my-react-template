import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CacheProvider from "./common-code/Hooks/Cache/CacheProvider";
import CachePage from "./Pages/CachePage";
import DebounceExample from "./Pages/DebounceExample";
import HomePage from "./Pages/HomePage";
import InfiniteScroll from "./Pages/InfiniteScroll";
import NumberIncrementCounter from "./Pages/InterviewExamples/NumberIncrementCounter";
import MouseInfo from "./Pages/MouseInfo";

function App() {
  return (
    <CacheProvider>
      <div className="App">
        <BrowserRouter>
          <div style={{ margin: "1rem" }}>
            <Link to="/">HomePage</Link>
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/infinte-scroll" element={<InfiniteScroll />} />
            <Route path="/mouse-position" element={<MouseInfo />} />
            <Route path="/debounce" element={<DebounceExample />} />
            <Route
              path="/number-increment-counter"
              element={<NumberIncrementCounter />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </CacheProvider>
  );
}

export default App;
