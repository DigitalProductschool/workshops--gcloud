import React, { Component } from 'react';
import { withRouter } from 'react-router';
import app from '../../base.js';

class AnnotateResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      image: undefined,
      recognizedLicensePlate: undefined
    }
  }

  componentDidMount() {
    let that = this;

    if (!this.state.image) {
      // TODO Retrieve stored image from storage
    }

    if (!this.state.recognizedLicensePlate) {
      // TODO Retrieve recognised license number from Firestore
    }
  }

  annotate(label) {
    // TODO Store annotation in Firestore
  }

  annotateCorrect (e) {
      this.annotate("correct");
  }

  annotateWrong (e) {
      this.annotate("wrong");
  }

  render() {
    return (
      <div style={{backgroundColor:"black", display: "grid", justifyContent: "center"}}>
        <img src={ this.state.image } />
        <h3 style={{color:"#F9AA33", textAlign:"center"}}>
          { this.state.recognizedLicensePlate }
        </h3>
        <div>
          <button onClick={this.annotateCorrect} style={{background:"green"}}>Correct</button>
          <button onClick={this.annotateWrong}  style={{background: "red"}}>Wrong</button>
        </div>
      </div>
    );
  }
}

export default withRouter(AnnotateResult);
