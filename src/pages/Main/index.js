import React, { Component } from 'react';
import Calendar from 'react-calendar'

import { withRouter } from 'react-router-dom';

import { DragArea } from './styles';

class Main extends Component {
  render() {
    return (
      <>
      <DragArea />
      <Calendar />
      </>
    );
  }
}

export default withRouter(Main);