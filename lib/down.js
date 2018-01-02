const path = require("path");
const fetch = require("node-fetch");
const fs = require("fs-extra");
const pkgDir = require("pkg-dir");

function download (url) {
    fetch(url)
        .then(function(res){
           return res.text()
        })
        .then(function(body){
            console.log(body)
        })
}

 module.exports = function(url){
    const file = path.resolve(pkgDir.sync(), `${url.split("/").pop()}`);
    console.log(file)
    download(url)
        .then((data)=>{
            return fs.outputFile(file,data)
        })
        .then(()=>{
            console.log("done")
        })
 }
