module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					src: ['./scss/*.s*ss'],
					dest: './css/style.css',
					ext: '.css'
				}]
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');

}