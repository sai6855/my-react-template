const timer = (value, increment) => {
  let currentValue = value;
  let internalFunc;
  const startTimer = () => {
    internalFunc = setInterval(() => {
      console.log("value: " + currentValue);
      currentValue = currentValue + increment;
    }, 1000);
  };

  <div  ></div>;

  const stopTimer = () => {
    clearInterval(internalFunc);
  };

  const pauseTimer = (afterTime, pauseTime) => {
    setTimeout(() => {
      clearInterval(internalFunc);
      setTimeout(() => {
        startTimer();
      }, pauseTime);
    }, afterTime);
  };

  return { startTimer, stopTimer, pauseTimer };
};

const timerObj = timer(10, 10);
timerObj.startTimer();
timerObj.pauseTimer(5000, 2000);

<meter  ></meter>