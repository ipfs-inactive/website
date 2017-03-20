'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({

    stylus: {
      compile: {
        options: {
          use: [
            require('yeticss'),
            require('autoprefixer-stylus')
          ]
        },

        files: {
          'css/main.css': ['_styl/main.styl']
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },

    watch: {
      build: {
        files: ['_styl/**'],
        tasks: ['build'],
        options: {
          livereload: true,
          atBegin: true
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'build',
          livereload: true,
          open: true,
          middleware: function (connect, options) {

            return [
              require('connect-livereload')(),
              connect.static(options.base[0])
            ];
          }
        }
      }
    }

  });

  grunt.registerTask('build', ['stylus', 'cssmin']);
  grunt.registerTask('serve', ['connect:server', 'watch']);
  grunt.registerTask('default', ['build']);
};
