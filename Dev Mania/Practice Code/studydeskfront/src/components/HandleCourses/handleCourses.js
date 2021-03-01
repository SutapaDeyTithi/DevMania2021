import React from 'react';
import './handleCourses.css';

class handleCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: ''
          }
      }

onClickGetFileList = () => {
    console.log("fetching file list");
    fetch('http://localhost:3000/getFileList', {
      method: 'get',
      headers: {'Content-Type': 'application/json'}
      })
      .then(response => {
         // console.log(response.json())
         this.props.setFileList(response.json());
        })
    //   .then(json => {
          console.log("hwloo");
      
        this.props.onRouteChange('showFileList');
    // });
  }

  render() {
    const { onRouteChange } = this.props;
    return (
        <div>
        {/* <div class="zone blue grid-wrapper"> */}
            <a href="#"
            onClick = {this.onClickGetFileList}
            >
                <button class="button button1">Show Course Details</button>
            </a>
            <a href="#"
            onClick = {() => onRouteChange('upload')}
            >
                <button class="button button1">Upload Content</button>
            </a>
            
        {/* </div> */}
     </div>
    );
}
}

export default handleCourses;