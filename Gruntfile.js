/*
 * grunt-appbot-coffee
 * https://github.com/roberto/grunt-appbot-coffee
 *
 * Copyright (c) 2013 Roberto Rodriguez
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    appbot_coffee: {
      oneApp: {
        options: {
        },
        appPaths: ['./test/fixtures/app/shared'],
        dependencyPaths: ["jqueryify"],
        destination: "./tmp/oneApp.js"
      },
      anotherApp: {
        options: {
        },
        appPaths: ['./test/fixtures/app/components/socialBar'],
        destination: "./tmp/anotherApp.js"
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'appbot_coffee', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
