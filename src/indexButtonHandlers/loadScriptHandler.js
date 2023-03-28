const remote = require('@electron/remote');
const { dialog } = remote;
const { readFile } = require('src/readFile');

function loadScriptHandler(){
    dialog.showOpenDialog({
        properties: ['openFile']
    }).then(result => {
        if(result === undefined){
            console.log("No file selected");
        }else{
            document.getElementById("actual-file").value = result.filePaths[0];
            readFile(result.filePaths[0]);
        }
    });
}
