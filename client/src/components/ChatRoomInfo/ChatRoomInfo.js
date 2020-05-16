import React from "react";
import classes from "./ChatRoomInfo.module.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const ChatRoomInfo = (props) => {
  const leaveRoom = () => {
    props.socketInstance.disconnect();
    props.history.push("/");
  };
  return (
    <div className={classes.Container}>
      <p className={classes.ChatRoomInfo}> Chat Room - {props.chatRoom} </p>
      <button className="btn btn-danger" onClick={leaveRoom}>
        {" "}
        Leave Room{" "}
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    chatRoom: state.login.chatRoom,
    socketInstance: state.chat.socketInstance,
  };
};
export default connect(mapStateToProps, null)(withRouter(ChatRoomInfo));
