import * as actions from "../actions/actionTypes";
const initialState = {
  socketInstance: null,
  users: [],
  messages: [],
  messagesRef: null,
};
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MESSAGES_REF:
      return {
        ...state,
        messagesRef: action.value,
      };
    case actions.SET_SOCKET_INSTANCE:
      return {
        ...state,
        socketInstance: action.value,
      };
    case actions.SET_USERS:
      return {
        ...state,
        users: action.value,
      };
    case actions.UPDATE_MESSAGES:
      return {
        ...state,
        messages: state.messages.concat(action.value),
      };
    default:
      return state;
  }
};
export default chatReducer;
