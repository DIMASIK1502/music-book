const initialState = {
  token: null,
  user: null,
  error: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case "AUTH_LOGIN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        error: null
      };
    case "AUTH_ERROR":
      return {
        ...state,
        token: null,
        user: null,
        error: action.payload
      };
    case "AUTH_LOGOUT":
      return {
        ...state,
        token: null,
        user: null,
        error: null
      };

    default:
      return state;
  }
};
