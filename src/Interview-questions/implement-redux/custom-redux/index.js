const createStore = (reducerFunc) => {
  let state = reducerFunc(undefined, { type: "@@INIT" });
  const listeners = [];

  const getState = () => state;
  const dispatch = (action) => {
    state = reducerFunc(state, action);
    listeners.forEach((listener) => {
      listener();
    });
  };
  const subscribe = (listener) => {
    listeners.push(listener);
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

const combineReducers = (reducers) => {
  return (state = undefined, action) => {
    let newState = {};

    Object.entries(reducers).forEach(([key, reducerFunction]) => {
      newState = {
        ...newState,
        [key]: reducerFunction(
          state ? state[key] : state,
          action ? action : { type: "@@INIT" }
        ),
      };
    });

    return newState;
  };
};

module.exports = {
  createStore,
  combineReducers,
};
