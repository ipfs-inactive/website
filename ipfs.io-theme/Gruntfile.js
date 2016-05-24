module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');

    var defaultConfigPath = './_js/config/development.json';
    var envConfigPath = './_js/config/' + process.env.NODE_ENV + '.json';
    var configPath = grunt.file.exists(envConfigPath) ? envConfigPath : defaultConfigPath;

    grunt.initConfig({
        //- compile main stylus file to output css file
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

        //- minify everything in the css output folder
        //- just add .min.css to the filename
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

        //- compile jade in the jade dir to matching paths in
        //  the output dir
        //- if you want pretty urls, make sure your jade files named index.jade, e.g:
        //
        //    about/index.jade   -> available at about/
        //    contact/index.jade -> available at contact/
        jade: {
            target: {
              files: [{
                  expand: true,
                  cwd: '_jade',
                  src: ['**/*.jade'],
                  dest: 'static',
                  ext: '.html',
              }]
            }
        },

        //- copy any files in assets to the same place in output dir
        //- beware of clobbering other generated files
        copy: {
            static: {
                files: [
                    {
                        cwd: '_assets',
                        expand: true,
                        src: ['**'],
                        dest: 'static/'
                    },
                ]
            }
        },

        watch: {
            build: {
                files: ['_styl/**', '_jade/**', 'assets/**'],
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
                    base: 'static',
                    livereload: true,
                    open: true,
                    middleware: function (connect, options) {
                      return [
                        require('connect-livereload')(),
                        connect.static(options.base[0])
                      ]
                    }
                }
            }
        },

    });

    grunt.registerTask('build', ['copy', 'stylus', 'cssmin', 'jade'])
    grunt.registerTask('serve', ['connect:server', 'watch'])
    grunt.registerTask('default', ['build'])
};
