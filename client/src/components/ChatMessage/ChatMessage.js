import React from "react";
import classes from "./ChatMessage.module.css";
const chatMessage = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.MessageInfo}>
        <span className={classes.Username}> {props.message.user} </span>
        <p className={classes.Text}> {props.message.text} </p>
      </div>
    </div>
  );
};
export default chatMessage;
