import React from 'react';
import './handleCourses.css';

const imgUrl = "https://www.lifewire.com/thmb/vTQXZ3cvALyxoVNcMDU7P094ezw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/482180855-56a9f6ab3df78cf772abc6d0.jpg";

const handleCourses = ({ onRouteChange, isSignedIn }) => {
    return (
        <div>
        {/* <div class="zone blue grid-wrapper"> */}
            <a href={imgUrl}>
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

export default handleCourses;