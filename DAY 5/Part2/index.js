// // -> Taking inputs from CLI in Node.js
const fs = require("fs");
const yargs = require("yargs");

const argvs = yargs
  .command("write", "Create a file", {
    filename: {
      describe: "Create a file with name from cli",
      alias: "n",
      type: "string",
    },
    content: {
      describe: "Content to be put inside the file",
      alias: "c",
      type: "string",
    },
  })
  .command("remove", "Delete the file", {
    filename: {
      describe: "Delete the file name with name from cli",
      alias: "rn",
      type: "string",
    },
  })
  .help().argv;

if (argvs._.includes("write")) {
  if (argvs.filename && argvs.content) {
    fs.writeFileSync(argvs.n, argvs.c);
  }
} else if (argvs._.includes("remove")) {
  if (argvs.rn) {
    fs.unlinkSync(argvs.rn);
  }
}

console.log(argvs.argv);

//# add file and content
// node index.js write --filename="TestFile.txt" --content="This is made using cli"

//# remove 
// node index.js remove --filename="TextFile.txt"