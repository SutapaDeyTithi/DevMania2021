import React from 'react';
//import './handleCourses.css';

const ShowFileList = ({ onRouteChange, fileList }) => {
    console.log(fileList);
    return (
        <div>
            <li>
                {
                    fileList.map(filename =>
                        <li>
                            <a href="#"
                            //onClick = {() => onRouteChange('contenList')}
                            >
                            {filename}<br></br>
                            </a>
                        </li>)
                }
                <br></br>
            </li>
            {/* <a href="#"
            //onClick = {() => onRouteChange('contenList')}
            >
                {fileList}
             
            </a> */}
            {/* <a href="#"
            onClick = {() => onRouteChange('upload')}
            >
                <button class="button button1">Upload Content</button>
            </a> */}
     </div>
    );
}

export default ShowFileList;