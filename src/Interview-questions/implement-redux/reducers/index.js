const todosState = {
  todos: [],
};

const usersState = {
  users: [],
};

const todosReducer = (state = todosState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

module.exports = {
  todosReducer,
  usersReducer,
};
