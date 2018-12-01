import React, { Component } from 'react';

import { loadHomeDataAsync } from '../actionCreator'

import { connect } from 'react-redux'

const mapState = (state) => {
    return {
      home: state.home.home
    }
}
  
const mapDispatch = (dispatch) => {
    return {
      loadCategories () {
        dispatch(loadHomeDataAsync(dispatch))
      }
    }
}

class Home extends Component {
  componentDidMount(){
    this.props.loadCategories()
  }
  render() {
    console.log(this.props.home)
    return (
      <div>home</div>
    );
  }
}

export default connect(mapState,mapDispatch)(Home);
