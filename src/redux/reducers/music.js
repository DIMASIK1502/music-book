const initialState = {
  error: "",
  myMusic: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_MY_MUSIC":
      return { ...state, myMusic: action.payload };
    default:
      return state;
  }
};
