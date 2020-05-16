// import React, { useRef, useEffect } from "react";
import React, { PureComponent } from "react";
import classes from "./ChatMessages.module.css";
import ChatMessage from "../ChatMessage/ChatMessage";
import { connect } from "react-redux";
import { setMessagesRef } from "../../containers /Chat/store/actions/index";
class ChatMessages extends PureComponent {
  constructor(props) {
    super(props);
    this.messagesRef = React.createRef();
  }
  componentDidMount() {
    console.log("Chat Messages component mounted", this.messagesRef);
    this.props.setMessagesRef(this.messagesRef);
  }
  render() {
    return (
      <div ref={this.messagesRef} className={classes.Container}>
        {this.props.messages.map((message, index) => {
          return <ChatMessage key={index} message={message} />;
        })}
      </div>
    );
  }
}
// const ChatMessages = (props) => {
//   const messagesRef = useRef(null);
//   useEffect(() => {
//     console.log("useEffect called");
//     if (messagesRef) {
//       setMessagesRef(messagesRef);
//     }
//   }, [messagesRef]);
//   return (
//     <div ref={messagesRef} className={classes.Container}>
//       {props.messages.map((message, index) => {
//         return <ChatMessage key={index} message={message} />;
//       })}
//     </div>
//   );
// };
const mapStateToProps = (state) => {
  return {
    messages: state.chat.messages,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setMessagesRef: (data) => dispatch(setMessagesRef(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatMessages);
