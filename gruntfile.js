'use strict';
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        watch: {
            compass: {
                files: ['css/**/*.sass'],
                tasks: ['sass']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify']
            },
            livereload: {
                options: { livereload: true },
                files: ['style.css', 'js/*.js', '*.html', '*.php', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}']
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                'force': true
            },
            all: [
                'Gruntfile.js',
                'js/source/**/*.js'
            ]
        },

		phpunit: {
            all: {
                dir: 'tests/phpunit/'
            }
        },

    });
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);

};