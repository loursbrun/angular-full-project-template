module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');



    grunt.initConfig({


        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'dev/templates/', src: ['**'], dest: 'deploy/templates/'}, // makes all src relative to cwd
                ]
            }
        },


        'pkg': grunt.file.readJSON('package.json'),

        'meta': {
            'jsFilesForTesting': [
                'bower_components/jquery/jquery.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-route/angular-route.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/angular-sanitize/angular-sanitize.js',
                'bower_components/angular-mocks/angular-mocks.js',
                'bower_components/restangular/dist/restangular.js',
                'bower_components/underscore/underscore.js',
                'bower_components/underscore/underscore.js'
            ]
        },



        'karma': {
            'development': {
                'configFile': 'karma.conf.js',
                'options': {
                    'files': [
                        '<%= meta.jsFilesForTesting %>',
                        'dev/**/*.js'
                    ],
                }
            },
            'deploy': {
                'options': {
                    'configFile': 'karma.conf.js',
                    'files': [
                        '<%= meta.jsFilesForTesting %>',
                        'deploy/scripts/app.js'
                    ],
                }
            },
            'vendors': {
                'options': {
                    'configFile': 'karma.conf.js',
                    'files': [
                        '<%= meta.jsFilesForTesting %>',
                        'deploy/scripts/vendors.js'
                    ],
                }
            },
            'minified': {
                'options': {
                    'configFile': 'karma.conf.js',
                    'files': [
                        '<%= meta.jsFilesForTesting %>',
                        'deploy/scripts/app-min.js'
                    ],
                }
            }
        },

        'jshint': {
            'beforeconcat': ['dev/**/*.js'],
        },

        'concat': {
            'deploy': {
                //'src': ['dev/**/*.js', 'dev/templates/**/*.js'],


                'src': [
                    'dev/**/*.js',
                    'dev/**/**/*.js.js'
                ],



                'dest': 'deploy/scripts/app.js'
            },
            'vendors': {
                'src': [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js'
                ],
                'dest': 'deploy/scripts/vendors.js'
            }
        },

        'uglify': {
            'options': {
                'mangle': false
            },
            'deploy': {
                'files': {
                    'deploy/scripts/app-min.js': ['deploy/scripts/app.js']
                }
            }
        },


    });

    grunt.registerTask('test', ['karma:development']);
    grunt.registerTask('deploy',
        [
            'jshint',
            //'karma:development',
            'concat',
            //'karma:deploy',
            //'uglify',
            'copy',
            //'karma:minified'
        ]);

};