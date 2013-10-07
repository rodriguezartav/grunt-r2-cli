(function() {
  var CLI, assert, should;

  assert = require("assert");

  should = require("should");

  CLI = require(process.cwd() + "/cli/lib/index");

  describe("Compile JS from paths", function() {
    return it("should compile just touch resources", function() {
      var str;
      return str = CLI.createApp("test");
    });
  });

}).call(this);
