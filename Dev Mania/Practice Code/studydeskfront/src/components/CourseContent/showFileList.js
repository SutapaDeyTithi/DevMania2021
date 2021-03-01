import React from 'react';
//import './handleCourses.css';

const ShowFileList = ({ onRouteChange, fileList }) => {
    console.log(fileList);
    return (
        <div>
        <div class="zone blue grid-wrapper">
            <a href="#"
            //onClick = {() => onRouteChange('contenList')}
            >
              fdsagh
                {fileList}
             
            </a>
            {/* <a href="#"
            onClick = {() => onRouteChange('upload')}
            >
                <button class="button button1">Upload Content</button>
            </a> */}
            
        </div>
     </div>
    );
}

export default ShowFileList;