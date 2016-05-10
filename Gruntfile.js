
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),

        'meta': {
            'jsFilesForTesting': [
                'bower_components/jquery/jquery.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-route/angular-route.js',
                'bower_components/angular-sanitize/angular-sanitize.js',
                'bower_components/angular-mocks/angular-mocks.js',
                'bower_components/restangular/dist/restangular.js',
                'bower_components/underscore/underscore.js',
                'bower_components/underscore/underscore.js',
                'test/**/*Spec.js'
            ]
        },

        'karma': {
            'development': {
                'configFile': 'karma.conf.js',
                'options': {
                    'files': [
                        '<%= meta.jsFilesForTesting %>',
                        'app/**/*.js'
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
            'beforeconcat': ['app/**/*.js'],
        },

        'concat': {
            'deploy': {
                'src': ['app/**/*.js'],
                'dest': 'deploy/scripts/app.js'
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
    grunt.registerTask('build',
        [
            'jshint',
            'karma:development',
            'concat',
            'karma:deploy',
            'uglify',
            'karma:minified'
        ]);

};