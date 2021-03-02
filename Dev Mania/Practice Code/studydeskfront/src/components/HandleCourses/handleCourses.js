import React from 'react';
import './handleCourses.css';

class handleCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            fileList: ''
          }
      }

onClickGetFileList = () => {
    console.log("fetching file list");
    fetch('http://localhost:3000/getFileList', {
      method: 'get',
      headers: {'Content-Type': 'text/json'}
      })
      .then(response => response.json())
      .then(entity => {
         this.props.setFileList(entity);
         //console.log(this.props.fileList);
         this.props.onRouteChange('showFileList');
       });
  }

  render() {
    const { onRouteChange, role } = this.props;
    console.log("this.props: " + role);
    if(role === 'admin')
    {
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
    else
    {
        return (
            <div>
            {/* <div class="zone blue grid-wrapper"> */}
                <a href="#"
                onClick = {this.onClickGetFileList}
                >
                    <button class="button button1">Show Course Details</button>
                </a>
                
            {/* </div> */}
         </div>
        );
    }
}
}

export default handleCourses;