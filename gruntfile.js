module.exports = function(grunt) {
	'use strict';
	
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	
	var
		SOURCE_DIR = '',
		BUILD_DIR = 'build/';

    grunt.initConfig( {
		
		clean: {
				all: [ BUILD_DIR ]
			},
		
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
	            },
	            all: [
	                'Gruntfile.js',
	                'js/**/*.js'
	            ]
	        },
		
			jsvalidate:{
				options:{
					globals: {},
					esprimaOptions:{},
					verbose: false
				},
				build: {
					files: { src: BUILD_DIR + '/**/*.js' }
				},
				dev: {
					files: { src: SOURCE_DIR + '/js/*.js' }
				}
			},
		
			phpunit: {
				'default': {
					cmd: 'phpunit',
					args: ['-c', 'tests/phpunit.xml']
				},
				multisite: {
					cmd: 'phpunit',
					args: ['-c', 'tests/multisite.xml']
				}
			},
		});

	grunt.registerTask( 'dev', [ 'clean:all', 'jsvalidate:dev' ] );
	grunt.registerTask( 'watch', [ 'watch' ] );
	grunt.registerTask( 'test', [ 'phpunit' ] );
	grunt.registerTask( 'default', ['jshint', 'jsvalidate:dev'] );

};