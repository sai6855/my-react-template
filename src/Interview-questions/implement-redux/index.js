const { createStore, combineReducers } = require("./custom-redux");
const { reducerFunc, reducerFunc2 } = require("./reducers");

const reducers = combineReducers({
  reducerFunc,
  reducerFunc2,
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState());
});
store.dispatch({ type: "ADD_DATA", payload: { id: 1, title: "Hello Hello" } });

store.dispatch({
  type: "ADD_DATA_2",
  payload: { id: 2, title: "Hello Hello " },
});
