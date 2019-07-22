import React, { Component } from "react";
import { actionCreators } from "./store";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import cookies from "js-cookie";
export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }
    async componentDidMount() {
      const { default: component } = await importComponent();
      if (!cookies.get("token")) {
        // this.props.history.push("/login");
        this.props.getcookie();
      } else {
        this.props.getcookie();
      }

      //已经存在token 但是不存在个人信息
      if (cookies.get("token") && !this.props.mydata) {
        this.props.getmydatas();
      }
      this.setState({
        component: component
      });
    }
    render() {
      const C = this.state.component;
        return C ? <C {...this.props} /> : null;
    }
  }
  const mapStateToProps = state => {
    return {
      token: state.getIn(["overall", "token"]), //获取redux token
      mydata: state.getIn(["overall", "mydata"]) //获取redux  mydata
    };
  };
  const mapDispathToProps = dispatch => {
    return {
      getcookie() {
        dispatch(actionCreators.GET_COOKIE()); //存储cookie token到redux
      },
      getmydatas() {
        dispatch(actionCreators.getmydata()); //获取个人信息存储redux
      }
    };
  };
  return withRouter(
    connect(
      mapStateToProps,
      mapDispathToProps
    )(AsyncComponent)
  );
}
