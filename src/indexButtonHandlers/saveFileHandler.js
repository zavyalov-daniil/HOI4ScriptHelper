const { saveChanges } = require('../saveChanges')

function saveFileHandler(){
    let actualFilePath = document.getElementById("actual-file").value;

    if(actualFilePath){
        saveChanges(actualFilePath,document.getElementById('content-editor').value);
    }else{
        alert("Please select a file first");
    }
}
