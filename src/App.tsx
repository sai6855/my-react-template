import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import CacheProvider from "./common-code/Hooks/Cache/CacheProvider";
import Practise from "./Interview-questions/practise";
import CustomRedux from "./Pages/CustomRedux";
//import CachePage from "./Pages/CachePage";
import DebounceExample from "./Pages/DebounceExample";
import DetectOutside from "./Pages/DetectOutside";
import EventDelegation from "./Pages/EventDelegation";
import HomePage from "./Pages/HomePage";
import InfiniteScroll from "./Pages/InfiniteScroll";
import NumberIncrementCounter from "./Pages/InterviewExamples/NumberIncrementCounter";
import MouseInfo from "./Pages/MouseInfo";
import Scroll from "./Pages/Scroll";

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
            <Route path="/event-delegation" element={<EventDelegation />} />
            <Route path="/practise" element={<Practise />} />
            <Route path="/custom-redux" element={<CustomRedux />} />
            <Route path="/detect-click-outside" element={<DetectOutside />} />
            <Route path="/scroll" element={<Scroll />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CacheProvider>
  );
}

export default App;
