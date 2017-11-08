const cac = require("cac")
const cli = cac()
const download = require("../lib/download")

cli.command("*", "cdnjs to local", (input,flags)=>{
  console.log("worked")
  const url = input[0]
  // console.log(download)
  download(url)
})
cli.parse()
