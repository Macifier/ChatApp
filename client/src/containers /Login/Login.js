import React, { PureComponent } from "react";
import classes from "./Login.module.css";
import { connect } from "react-redux";
import { setUserName, setChatRoom } from "./store/actions/index";
class Login extends PureComponent {
  navigateToChat = () => {
    localStorage.setItem("username", this.props.username);
    localStorage.setItem("chatRoom", this.props.chatRoom);
    this.props.history.push("/chat");
  };
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.FormContainer}>
          <h4> Login To Room </h4>
          <div className="form-group">
            <label for="username"> UserName </label>
            <input
              onChange={(event) => this.props.setUserName(event.target.value)}
              value={this.props.username}
              type="text"
              className="form-control"
              id="username"
            />
          </div>
          <div className="form-group">
            <label for="chatRoom"> Chat Room </label>
            <input
              onChange={(event) => this.props.setChatRoom(event.target.value)}
              value={this.props.chatRoom}
              type="text"
              className="form-control"
              id="chatRoom"
            />
          </div>
          <button
            onClick={this.navigateToChat}
            disabled={
              this.props.username.trim() === "" ||
              this.props.chatRoom.trim() === ""
            }
            className="btn btn-primary btn-lg"
          >
            Login
          </button>
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
    setUserName: (data) => dispatch(setUserName(data)),
    setChatRoom: (data) => dispatch(setChatRoom(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
