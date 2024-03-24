const fs = require("fs");

console.log("running");
const testFolder = "./contrans/";
fs.readdir(testFolder, (err: any, files: any) => {
  files.forEach((file: any) => {
    console.log("./contrans/" + file)
    fs.rename("./contrans/" + file, "./combatwombatsftc/public/content/" + file, (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
});

const newString = {};
console.log("finished juant");
