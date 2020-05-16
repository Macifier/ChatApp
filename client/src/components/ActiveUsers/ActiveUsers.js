import React from "react";
import classes from "./ActiveUsers.module.css";
import { connect } from "react-redux";
const ActiveUsers = (props) => {
  return (
    <div className={classes.Container}>
      <p className={classes.Info}> Active Users </p>
      {props.users.map((user, index) => {
        return (
          <p key={index} className={classes.Username}>
            {" "}
            {user.name}{" "}
          </p>
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.chat.users,
  };
};
export default connect(mapStateToProps, null)(ActiveUsers);
