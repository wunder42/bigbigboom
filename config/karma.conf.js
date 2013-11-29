// Contents of: config/karma.conf.js
module.exports = function (config) {
  config.set({
    basePath : '../',

    // Fix for "JASMINE is not supported anymore" warning
    frameworks : ["jasmine"],

    files : [
      'app/js/angular.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/jquery-1.8.3.min.js',
      'app/js/bootstrap.min.js',
      'app/js/jquery.sidr.min.js',
      'app/js/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    browsers : ['Chrome'],

    junitReporter : {
      outputFile : 'test_out/unit.xml',
      suite      : 'unit'
      //...
    }
  });
}