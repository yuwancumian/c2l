const fs = require("fs-extra")
const request = require("request")



function download(url, dest) {
  const filename = url.split("/").pop();
  return new Promise((resolve, reject) => {
    request(url, function(err, response, body){
      console.log('statusCode:', response && response.statusCode); 
    })
  })
}

module.exports  = function(url){
  return download(url) 
}
