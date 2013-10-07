assert = require("assert")

should = require("should")

CLI = require(process.cwd() + "/cli/lib/index")

describe "Compile JS from paths" , ->

  it "should compile just touch resources" , ->
     str = CLI.createApp("test")

