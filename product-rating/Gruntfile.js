module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {    // indicates that it will be used only during development
              files: {
                // destination     // source file
                'src/styles/main.css': 'src/sass/**/*.scss'
              }
            }
          },
        watch: {
            sass: {
                files: 'src/sass/**/*.scss' ,
                tasks: ['sass']
                }
            }
      });
      

      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-sass');
    };