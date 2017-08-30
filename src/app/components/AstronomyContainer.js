import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import { connect } from 'react-redux';
import fetchData from '../../actions/fetch_data';

class AstronomyContainer extends Component {

  componentWillMount() {
    console.log(this.props.astronomy);
    this.props.fetchData();
    console.log(this.props.fetchData());
  }

  render() {
    return (
      <AstronomyCard data={this.props.astronomy} / >
    )
  }
}

// connect react with redux
// @param mapStateToProps (required)
// @param mapDispatchToProps (optional)

function mapStateToProps(state){
  return { astronomy: state.astronomy};
}

export default connect(mapStateToProps, { fetchData }) (AstronomyContainer);
