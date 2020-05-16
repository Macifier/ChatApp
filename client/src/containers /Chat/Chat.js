import React, { PureComponent } from "react";
import io from "socket.io-client";
import classes from "./Chat.module.css";
import { connect } from "react-redux";
import ChatRoomInfo from "../../components/ChatRoomInfo/ChatRoomInfo";
import ActiveUsers from "../../components/ActiveUsers/ActiveUsers";
import ChatMessages from "../../components/ChatMessages/ChatMessages";
import SendMessage from "../../components/SendMessage/SendMessage";

import {
  setSocketInstance,
  setUsers,
  updateMessages,
} from "./store/actions/index";
class Chat extends PureComponent {
  componentDidMount() {
    const username = this.props.username;

    const chatRoom = this.props.chatRoom;

    if (!username || !chatRoom) {
      console.log("user not logged in");
      this.props.history.push("/");
    }
    let socket = io("http://localhost:8080/");
    this.props.setSocketInstance(socket);
    socket.emit(
      "join",
      { name: this.props.username, room: this.props.chatRoom },
      (error) => {
        if (error) {
          console.log("error occured");
        }
      }
    );
    socket.on("message", (message) => {
      this.props.updateMessages(message);
    });

    socket.on("roomData", ({ users }) => {
      this.props.setUsers(users);
    });
  }
  render() {
    return (
      <div className={classes.Container}>
        <ChatRoomInfo />
        <div className={classes.SubContainer}>
          <ActiveUsers />
          <div className={classes.SubContainerMessages}>
            <ChatMessages />
            <SendMessage />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    username: state.login.username,
    chatRoom: state.login.chatRoom,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setSocketInstance: (data) => dispatch(setSocketInstance(data)),
    updateMessages: (data) => dispatch(updateMessages(data)),
    setUsers: (data) => dispatch(setUsers(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
