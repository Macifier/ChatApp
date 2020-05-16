import React, { useState } from "react";
import classes from "./SendMessage.module.css";
import { connect } from "react-redux";

const SendMessage = (props) => {
  const [message, setMessage] = useState("");
  const sendMessage = () => {
    props.socketInstance.emit("sendMessage", message, () => setMessage(""));
    console.log("messagesRef", props.messagesRef);
    if (props.messagesRef) {
      console.log(
        "messageRef founddddd",

        props.messagesRef.current.scrollTop,
        props.messagesRef.current.scrollHeight,
        props.messagesRef
      );
      props.messagesRef.current.scrollTop =
        props.messagesRef.current.scrollHeight;
    }
  };
  return (
    <div className={classes.Container}>
      <input
        onChange={(event) => setMessage(event.target.value)}
        value={message}
        type="text"
        className={classes.MessageInput}
        placeholder="Enter Message"
      />
      <button
        disabled={message.trim() === ""}
        onClick={sendMessage}
        className={["btn btn-primary btn-lg", classes.SendButton].join(" ")}
      >
        {" "}
        Send{" "}
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    socketInstance: state.chat.socketInstance,
    messagesRef: state.chat.messagesRef,
  };
};
export default connect(mapStateToProps, null)(SendMessage);
