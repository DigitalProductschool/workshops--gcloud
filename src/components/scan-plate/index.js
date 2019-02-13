import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import app from '../../base.js';
import { Redirect } from  'react-router';

const uuidv1 = require('uuid/v1');

class ScanPlate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultId: undefined
    }
  }

  onTakePhoto (dataUri) {
    // TODO Store image in Storage 
  }

  render() {
    const { resultId } = this.state;

    if (resultId) {
      const annotateUrl = '/annotate/' + resultId;
      return <Redirect to={annotateUrl} push={true} />
    }

    return (
      <div style={{backgroundColor:"black", display: "grid", justifyContent: "center"}}>
      <h2 style={{color:"#F9AA33", textAlign:"center"}}>Please scan the next car plate!</h2>
        <Camera
          isImageMirror = {false}
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
      </div>
    );
  }
}

export default withRouter(ScanPlate);
