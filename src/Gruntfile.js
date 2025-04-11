module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            dist: {

            },
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    noCache: true,
                },
                files: {
                    'src/Assets/css/app.min.css': 'src/Assets/scss/style.scss',
                }
            }
        },
        watch: {
            options: {livereload: true},
            sass: {
                files: ['src/Assets/scss/*.scss','src/Assets/scss/*/*.scss'],
                tasks: ['sass']
            },
            // js: {
            //     files: ['Assets/js/*.js'],
            //     tasks: ['uglify']
            // },

        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('runcss', ['sass']);
    grunt.registerTask('runjs', ['uglify']);
    grunt.registerTask('default', ['watch']);


};