import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers /Login/Login";
import Chat from "./containers /Chat/Chat";
import { restoreReduxState } from "./store/actions/index";
import { connect } from "react-redux";
class App extends PureComponent {
  componentWillMount() {
    this.props.restoreState();
  }
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    restoreState: () => dispatch(restoreReduxState()),
  };
};
export default connect(null, mapDispatchToProps)(App);
