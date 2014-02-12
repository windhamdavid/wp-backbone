'use strict';
module.exports = function(grunt) {

    grunt.initConfig({

		watch: {
		    scripts: {
		        files: ['js/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		        },
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
        }

    });

	grunt.loadNpmTasks('grunt-contrib-watch');

};