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
		},
		watch: {
			css: {
				tasks: ['sass'],
				files: ['./scss/*.s*ss']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);

}