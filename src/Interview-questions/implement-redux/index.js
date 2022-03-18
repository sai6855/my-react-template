const { createStore, combineReducers } = require("./custom-redux");
const { todosReducer, usersReducer } = require("./reducers");

const reducers = combineReducers({
  todos: todosReducer,
  users: usersReducer,
});

const store = createStore(reducers);

module.exports = store;
