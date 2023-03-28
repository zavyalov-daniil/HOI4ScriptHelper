const fs = require('fs');

function saveChanges(filepath, content){
    fs.writeFile(filepath, content, function (err) {
        if(err){
            alert("An error ocurred updating the file"+ err.message);
            console.log(err);
            return;
        }

        alert("The file has been succesfully saved");
    });
}

module.exports.saveChanges = saveChanges;
