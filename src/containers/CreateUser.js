import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from '../components/User';
import * as actions from '../store/actions/index';

class CreateUser extends Component {
  state = {
      userName: ''
  }

  onChangeUserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      userName: this.state.userName
    }

    this.props.onUserCreate(userData);
    
    this.setState({
      userName: ''
    })
  }

  render() {
      return (
        <User 
          onSubmit = {this.onSubmit}
          onChangeUserName = {this.onChangeUserName}
          userName = {this.state.userName}/>
      );
  }
}


const mapDispatchToProps = dispatch => {
  return {
      onUserCreate: (userData) => dispatch(actions.userCreate(userData))
  }
}

export default connect( null, mapDispatchToProps )( CreateUser );