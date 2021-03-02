import React from 'react';
import './showFileList.css';

const ShowFileList = ({ onRouteChange, fileList }) => {
    console.log(fileList);
    return (
        <div>
            <li>
                {
                    fileList.map(filename =>
                        <li>
                            <a href="https://bn.khanacademy.org/" className = "myLink" target="_blank"
                            //onClick = {() => onRouteChange('contenList')}
                            >
                            <u>{filename}</u><br></br>
                            </a>
                        </li>)
                }
                <br></br>
            </li>       
     </div>
    );
}

export default ShowFileList;