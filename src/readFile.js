const fs = require('fs');
function readFile(filepath) {
    fs.readFile(filepath, 'utf-8', function (err, data) {
        if(err){
            alert("An error ocurred reading the file :" + err.message);
            return;
        }

        document.getElementById("content-editor").value = data;
    });
}

module.exports.readFile = readFile;
