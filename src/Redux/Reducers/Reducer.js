export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TECHNOLOGY":
      console.log(action);
      return {
        ...state,
        tech: action.tech
      };
    case "SET_USERNAME":
      console.log(action);
      return {
        ...state,
        userInfo: action.userInfo
      };
    default:
      return state;
  }
};
