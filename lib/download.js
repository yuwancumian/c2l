const path = require("path");
const fetch = require("node-fetch");
const fs = require("fs-extra");
const pkgDir = require("pkg-dir");
const ora = require("ora");
const chalk = require("chalk");
const spinner = ora();

function download (url) {
    spinner.start()
    spinner.text = 'Downloading...'
    return fetch(url)
        .then(function(res){
           return res.text()
        })
}

 module.exports = function(url,dest){
    let file = path.resolve(pkgDir.sync(), `lib/${url.split("/").pop()}`);
    if (dest) {
        file = path.resolve(pkgDir.sync(), `${dest}/${url.split("/").pop()}`)
    }
    download(url)
        .then((data)=>{
            return fs.outputFile(file,data)
        })
        .then(()=>{
            spinner.stop()
            console.log(chalk.cyan("Download success!!"))
        })
 }
