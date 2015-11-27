// Gruntfile.js
module.exports = function (grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

      sass: {
        dist: {
          files: {
            'public/stylesheets/style.css' : 'sass/style.scss'
          }
        }
      },

    });
    grunt.registerTask('default', ['sass']);
}
