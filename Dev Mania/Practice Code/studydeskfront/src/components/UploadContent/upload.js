import React from 'react';
import './upload.css';


const Upload = () => {
    return (
        <div>
            <h1>File Upload Test</h1>

            <form action="/upload" method="post" enctype="multipart/form-data">
                <input type="file" name="avatar" multiple/>
                <button>Submit</button>
            </form>

         </div>
    );
}

export default Upload;