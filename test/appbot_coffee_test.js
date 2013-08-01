'use strict';

var grunt = require('grunt');

var compiler = require("appbot-compiler")


/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.appbot_coffee = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },

  compileApp: function(test) {
    test.expect(1);
    var result = ""
    result = grunt.file.read('tmp/oneApp.js');
    test.notEqual(result,null,"Compiler should no be null")
    test.done();
  },
  compileAnotherApp: function(test) {
    test.expect(2);
    var result = ""
    result = grunt.file.read('tmp/anotherApp.js');
    test.notEqual(result,null,"Compiler should no be null")    
    test.notEqual(result.indexOf("components/socialBar" , -1 , "result should contain components/socialBar" ))

    test.done();
  },
};
