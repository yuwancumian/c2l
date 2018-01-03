const cac = require("cac");
const cli = cac();

const download = require("../lib/download");

cli.command("*", "cdnjs to local", (input,flags)=>{
  const url = input[0]
  download(url, flags.o)
});

cli.option("output",{
  alias: "o",
  desc: "output file derectory"
});
cli.parse();

