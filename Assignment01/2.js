// Write a code to read the contents of a file in js.

const fs = require('fs');
function readFile(filePath){
    fs.readFile(filePath, 'utf8', (error,data) => {
        if(error){
            console.log("Error reading the file:",error.message);

        } else {
            console.log('File contents:\n',data);
        }
    })
}

readFile('\n example.txt');