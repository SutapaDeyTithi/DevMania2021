import React from 'react';
import './showCourses.css';

const imgUrl = "https://www.lifewire.com/thmb/vTQXZ3cvALyxoVNcMDU7P094ezw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/482180855-56a9f6ab3df78cf772abc6d0.jpg";

const ShowCourses = () => {
    return (
      <div>
            <div class="zone blue grid-wrapper">
                <div class="box zone"><img src={imgUrl} alt="Paris"/></div>
                <div class="box zone"><img src={imgUrl}/></div>
                <div class="box zone"><img src={imgUrl}/></div>
                <div class="box zone"><img src={imgUrl}/></div>
                <div class="box zone"><img src={imgUrl}/></div>
                <div class="box zone"><img src={imgUrl}/></div>
                <div class="box zone"><img src={imgUrl}/></div>
                <div class="box zone"><img src={imgUrl}/></div>
            </div>
         </div>
    );
}

export default ShowCourses;