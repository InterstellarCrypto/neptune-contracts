
// this block invokes `artifacts.require(file)` on each `file` in `./build/contracts` directory
const fs = require('fs');
const contractsDirectory = "../build/contracts/";

fs.readdir(contractsDirectory, (err, files) => {
  files.forEach(file => {
    const tokenName = file.replaceAll(".json", "");
    console.log("tokenName = " + tokenName)
})});