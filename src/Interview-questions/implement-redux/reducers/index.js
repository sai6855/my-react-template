const initialState = {
  data: [{ id: 1, title: "Hello" }],
};

const initialState2 = {
  data2: [{ id: 2, title: "Hello" }],
};

const reducerFunc = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    default:
      return state;
  }
};

const reducerFunc2 = (state = initialState2, action) => {
  switch (action.type) {
    case "ADD_DATA_2":
      return {
        ...state,
        data2: [...state.data2, action.payload],
      };

    default:
      return state;
  }
};

module.exports = {
  reducerFunc,
  initialState,
  reducerFunc2,
};
