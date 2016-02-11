var fs = require('fs'),
    gulp = require('gulp'),
    // gutil = require('gulp-util'),
    //bust = require('gulp-buster'),
    //template = require('gulp-template'),
    // webpack = require('webpack'),
    // reacthotserver = require('./webpack-hotserver'),
    initGulpTasks = require('react-component-gulp-tasks');

    // Read the package.json to detect the package name and dependencies
    var pkg = JSON.parse(fs.readFileSync('./package.json'));

    // Default dependencies from package.json, except reactify (which is used for
    // the build). Dependencies can be customised by hard-coding this array.
    var dependencies = [];
    Object.keys(pkg.dependencies).forEach(function(i) {
    	if (i !== 'reactify') dependencies.push(i);
    });

initGulpTasks(gulp,{
    component: {
        file: 'React-Summernote.js',
        name: 'React-Summernote',
        src: 'src',
        dist: 'dist',
        pkgName: pkg.name,
        dependencies: dependencies,
        less: {
            entry: '',
            path: ''
        }
    },
    example: {
        src: 'example/src',
        dist: 'example/dist',
        files: [],
        scripts: [],
        less: [],
        port: '3999'
    }
});

// gulp.task('dev', function() {
//     reacthotserver.startServer();
// });
//
// gulp.task('default', ['dev']);
