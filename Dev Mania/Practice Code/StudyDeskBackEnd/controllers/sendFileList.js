const path =  require('path');
const fs = require('fs');

//joining path of directory 
const directoryPath = path.join(".\\uploads");

// source: https://gist.github.com/kethinov/6658166
//passsing directoryPath and callback function
// List all files in a directory in Node.js recursively in a synchronous fashion
 // List all files in a directory in Node.js recursively in a synchronous fashion
 var walkSync = function(dir, filelist) {
    var path = path || require('path');
    var fs = fs || require('fs'),
        files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist);
        }
        else {
            filelist.push(path.join(dir, file));
        }
    });
    return filelist;
};

const sendFileList = (req, res) => {
    console.log("hi");
    var list = walkSync(directoryPath, list);
    console.log(list);
    res.send(list)  
  }
module.exports = {
    sendFileList: sendFileList
}