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

  var CLI = require("../cli/lib/index")

  grunt.registerMultiTask('r2cli', 'R2 Command Line Tool', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var appName = grunt.option('name');


    if(!appName){
      throw "Arguments --name is required ej: grunt r2-cli --name=newApp" 
    }
    
    var result = "";

    result = CLI.createApp(appName);

    // Write the destination file.
    grunt.file.write(this.data.destination + "/" + appName + "/" + appName + "_style.less", result["style"]);
    grunt.file.write(this.data.destination + "/" + appName + "/" + appName + "_layout.eco", result["layout"]);
    grunt.file.write(this.data.destination + "/" + appName + "/" + appName + ".coffee", result["app"]);
    grunt.file.write(this.data.destination + "/" + appName + "/component.json", result["component"]);
  });

};
