import React, { useEffect } from "react";

const NumberIncrementCounter = () => {
  const [count, setCount] = React.useState(0);
  const [countUI, setCountUI] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [timer, setTimer] = React.useState(0);
  const [start, setStart] = React.useState(false);

  const handleReset = () => {
    setCount(0);
    setDuration(0);
    setTimer(0);
    setCountUI(0);
  };

  useEffect(() => {
    let timerInt: NodeJS.Timer;
    let countInt: NodeJS.Timer;

    if (start) {
      timerInt = setInterval(() => {
        setTimer((prevTimer) =>
          prevTimer === duration ? duration : prevTimer + 1
        );
      }, 1000);

      countInt = setInterval(() => {
        setCountUI((prevCount) =>
          count === prevCount ? count : prevCount + 1
        );
      }, 1000 * (duration / count));
    }

    return () => {
      if (timerInt) clearInterval(timerInt);
      setTimer(0);
      setCountUI(0);
      if (countInt) clearInterval(countInt);
    };
  }, [start, duration, count]);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          required
          value={count}
          onChange={(e) => {
            setStart(false);
            setCount(e.target.valueAsNumber);
          }}
        />
        <input
          type="number"
          required
          value={duration}
          onChange={(e) => {
            setStart(false);
            setDuration(e.target.valueAsNumber);
          }}
        />

        <button
          type="submit"
          onClick={() => {
            setStart(true);
          }}
        >
          start
        </button>
        <button
          onClick={() => {
            setStart(false);
            handleReset();
          }}
        >
          reset
        </button>
      </form>

      <div style={{ margin: "1rem" }}>count : {countUI}</div>
      <div style={{ margin: "1rem" }}>timer : {timer}</div>
    </div>
  );
};

export default NumberIncrementCounter;
