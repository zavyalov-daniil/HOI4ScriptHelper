const fs = require('fs');

function deleteFile(filepath){
    fs.exists(filepath, function(exists) {
        if(exists) {
            fs.unlink(filepath,function(err){
                if(err){
                    alert("An error ocurred updating the file"+ err.message);
                    console.log(err);
                }
            });
        } else {
            alert("This file doesn't exist, cannot delete");
        }
    });
}

module.exports.deleteFile = deleteFile;
