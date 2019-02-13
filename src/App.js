import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ScanPlate from './components/scan-plate/index.js';
import AnnotateResult from './components/annotate/index.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ScanPlate} />
          <Route path="/annotate/:id" component={AnnotateResult} />
        </div>
      </Router>
    );
  }
}

export default App;
