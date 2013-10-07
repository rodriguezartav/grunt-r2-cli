#
# * grunt-appbot-coffee
# * https://github.com/roberto/grunt-appbot-coffee
# *
# * Copyright (c) 2013 Roberto Rodriguez
# * Licensed under the MIT license.
# 
"use strict"
module.exports = (grunt) ->
  
  # Project configuration.
  grunt.initConfig
    
    # Before generating any new files, remove any previously-created files.
    clean:
      cliLib: ["./cli/lib/*.*"]
      test: ["./test/*.js"]
      temp: ["./tmp/*.*"]

    copy:
      eco:
        expand: true
        flatten: true
        cwd: "./cli/src/"
        src: ["*.eco"]
        dest: "./cli/lib/"
        ext: ".eco"

    coffee:
      cli:
        expand: true
        flatten: true
        cwd: "./cli/src"
        src: ["*.coffee"]
        dest: "./cli/lib"
        ext: ".js"
        
      testFiles:
        expand: true,
        flatten: true,
        cwd: './test/src',
        src: ['*.coffee'],
        dest: './test/',
        ext: '.js'

    
    mochaTest:
      test:
        options:
          reporter: 'spec'
        src: ['test/*.js']


    r2cli:
      oneApp:
        destination: "./tmp"
  
  # Actually load this plugin's task(s).
  grunt.loadTasks "tasks"
  
  # These plugins provide necessary tasks.
  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-nodeunit"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks('grunt-mocha-test');
  
  # Whenever the "test" task is run, first clean the "tmp" dir, then run this
  # plugin's task(s), then test the result.
  grunt.registerTask "test", ["clean", "coffee", "copy", "mochaTest"]
  
  # By default, lint and run all tests.
  grunt.registerTask "default", ["clean:temp", "r2cli"]