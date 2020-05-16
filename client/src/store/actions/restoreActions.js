import {
  setChatRoom,
  setUserName,
} from "../../containers /Login/store/actions/index";
export const restoreReduxState = () => {
  return (dispatch) => {
    const username = localStorage.getItem("username");
    const chatRoom = localStorage.getItem("chatRoom");
    if (username && chatRoom) {
      dispatch(setUserName(username));
      dispatch(setChatRoom(chatRoom));
    }
  };
};
