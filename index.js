const fs = require("fs");

console.log("running");
const testFolder = "./contrans/";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.readdir(testFolder, (err, files) => {
  files.forEach((file) => {
    console.log(
      "./contrans/" + file + ", mb the function only does one file at a time. no full stop (.) just words and spaces and remember to end with a character not a space"
    );
    rl.question("What is the name of the file ", function (namefile) {
      let str = namefile;
      str = str.replace(/\s+/g, "-").toLowerCase();

      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      let currentDate = `${day}-${month}-${year}`;
      fs.rename(
        "./contrans/" + file,
        "./combatwombatsftc/public/content/" + str + "~" + currentDate + ".md",
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      rl.close();
    });
  });
});
