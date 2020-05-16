import * as actions from "./actionTypes";
export const setUserName = (value) => {
  return {
    type: actions.SET_USER_NAME,
    value: value,
  };
};
export const setChatRoom = (value) => {
  return {
    type: actions.SET_CHAT_ROOM,
    value: value,
  };
};
