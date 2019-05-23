export function setTechnology(text) {
  return {
    type: "SET_TECHNOLOGY",
    tech: text
  };
}

export function setUserInfo(text) {
  return {
    type: "SET_USERNAME",
    userInfo: text
  };
}
