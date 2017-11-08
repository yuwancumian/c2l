const fs = require("fs-extra")
const request = require("request")

function download(url, dest) {
  const filename = `lib/${url.split("/").pop()}`
  console.log(filename)
  return new Promise((resolve, reject) => {
    request(url, function(err, response, body){
      console.log('statusCode:', response && response.statusCode); 
    })
  })
}

module.exports  = function(url){
  return download(url).then(()=>{
  fs.outputFile(filename, body, err=>{
        console.log(err)
      }).then(()=>{
        console.log("writed")
      })
  })
}
