import { Link } from "react-router-dom";
import AddPropstochild from "../common-code/Components/AddPropstochild";

const HomePage = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <AddPropstochild style={{ margin: "0.5rem", padding: "0.5rem" }}>
        {/* <Link to="/">Home</Link> */}
        <Link to="/infinte-scroll">InfiniteScroll</Link>
        <Link to="/mouse-position">Mouse info</Link>
        <Link to="/debounce">Debounce</Link>
        <Link to="/cache">Cache</Link>

        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="https://learnersbucket.com/examples/interview/number-increment-counter-in-javascript-react/">
            Interview:
          </a>

          <Link to="/number-increment-counter">number-increment-counter</Link>
        </div>
        <Link to="/event-delegation">event-delegation/ event-bubling</Link>
        <Link to="/practise">practise</Link>
        <Link to="/custom-redux">Custom-Redux</Link>
        <Link to="/detect-click-outside">detect-click-outside</Link>
        <Link to="/scroll">scroll</Link>
      </AddPropstochild>
    </div>
  );
};

export default HomePage;
