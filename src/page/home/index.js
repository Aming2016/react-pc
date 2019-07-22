import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import homeCss from './index.scss'

class home extends Component {
  constructor(props) {
    super(props);
    this.gopage = this.gopage.bind(this);
  }
  render() {
    return (
      <div className={homeCss.home} onClick={this.gopage}>
      </div>
    );
  }
  gopage() {
    this.props.history.push("/detail");
  }
}
export default withRouter(home);
