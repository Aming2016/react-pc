import React, { Component } from "react";
import {connect} from 'react-redux';
import "./index.scss";
import {actionCreators}  from './store';
class detail extends Component {
  render() {
    return (
    <div className='home'> page 
      <div>{this.props.focused}</div>
      <button onClick={this.props.clickbtn}>点击修改redux</button>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    focused: state.getIn(['page','focused']) //state.get('page').get('focused')
  }
}
const mapDispathToProps = (dispatch) => {
  return{
    clickbtn(){
      dispatch(actionCreators.BTN_CLICK())
    }
  }
}
 export default connect(mapStateToProps,mapDispathToProps)(detail);
