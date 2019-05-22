export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TECHNOLOGY":
      state.tech = action.tech;
      console.log(action);
      return state;
    default:
      return state;
  }
}