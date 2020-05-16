import * as actions from "./actionTypes";
export const setMessagesRef = (value) => {
  return {
    type: actions.SET_MESSAGES_REF,
    value: value,
  };
};
export const setSocketInstance = (value) => {
  return {
    type: actions.SET_SOCKET_INSTANCE,
    value: value,
  };
};
export const setUsers = (value) => {
  return {
    type: actions.SET_USERS,
    value: value,
  };
};
export const updateMessages = (value) => {
  return {
    type: actions.UPDATE_MESSAGES,
    value: value,
  };
};
