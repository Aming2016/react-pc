import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import history from "../config/history";
import routes from "../router";
import "../styles/index";
import Heade from './Heade'
function RenderRouters({ routes }) {
  return routes.map(item => {
      return (
        <Route
          path={item.link}
          key={item.name}
          render={() => <item.component />}
        />
      );
  });
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router history={history}>
        <Fragment>
          <Heade/>
          <Route exact path="/" render={() => <Redirect to="/home" />} />{" "}
          <RenderRouters routes={routes}> </RenderRouters>{" "}
        </Fragment>{" "}
      </Router>
    );
  }
}
export default App;
