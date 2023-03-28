const { deleteFile } = require('../deleteFile')

function deleteFileHandler(){
    let actualFilePath = document.getElementById("actual-file").value;

    if(actualFilePath){
        deleteFile(actualFilePath);
        document.getElementById("actual-file").value = "";
        document.getElementById("content-editor").value = "";
    }else{
        alert("Please select a file first");
    }
}
