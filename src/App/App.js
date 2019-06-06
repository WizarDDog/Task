import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { getData } from './actions';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleValueChange = (ev) => {
    const { input } = this.state;
    if (input.length <= 10) {
      this.setState({
        input: ev.target.value,
      });
    }
  };



  render() {
    const { input } = this.state;
    const { Values } = this.props.values;
    return (
      <div className="App">
        <input className="input" value={input} type="text" onChange={ev => this.handleValueChange(ev)} />
        <button className="button" onClick={() => this.props.submit(input)} >Submit</button>
        {!isNaN(Values.val3 * Values.val5) &&
        <div className="showValue">
          Value: {Values.val3 * Values.val5}
        </div>}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      values: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    submit: payload => dispatch(getData(payload)),
  }
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(App);
