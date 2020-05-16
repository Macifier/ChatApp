import * as actions from "../actions/actionTypes";
const initialState = {
  username: "",
  chatRoom: "",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER_NAME:
      return {
        ...state,
        username: action.value,
      };
    case actions.SET_CHAT_ROOM:
      return {
        ...state,
        chatRoom: action.value,
      };
    default:
      return state;
  }
};
export default loginReducer;
