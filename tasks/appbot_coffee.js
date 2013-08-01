/*
 * grunt-appbot-coffee
 * https://github.com/roberto/grunt-appbot-coffee
 *
 * Copyright (c) 2013 Roberto Rodriguez
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var compiler = require("grunt-appbot-compiler")

  grunt.registerMultiTask('appbot_coffee', 'Compile App with CommonJS', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

    var result = ""

    result = compiler.generateFile(this.data.appPaths , this.data.dependencyPaths);

    // Write the destination file.
    grunt.file.write(this.data.destination, result);
  });

};
