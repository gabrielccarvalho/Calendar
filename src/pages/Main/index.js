import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import { Header } from './styles';

class Main extends Component {
  render() {
    return (
      <>
      <Header />
      </>
    );
  }
}

export default withRouter(Main);