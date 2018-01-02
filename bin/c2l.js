const cac = require("cac");
const cli = cac();
const ora = require("ora");
const download = require("../lib/down");

cli.command("*", "cdnjs to local", (input,flags)=>{
  console.log("worked")
  const url = input[0]
  console.log(flags.output)
  // console.log(download)
  download(url)
});

cli.option("output",{
  alias: "o",
  desc: "output file derectory"
});
cli.parse();


const spinner = ora();
// sao.on('download:start', () => {
//   spinner.text = 'Downloading...'
//   spinner.start()
// })
// sao.on('download:stop', () => {
//   spinner.stop()
// })
