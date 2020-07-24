// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    browsers: ['ChromeHeadless'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma'),
      require('karma-phantomjs-launcher'),
      require('karma-coverage'),
      require('karma-sonarqube-unit-reporter')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly','text-summary' ],
      fixWebpackSourcePaths: true,
      thresholds: {
          statements: 80,
          lines: 80,
          branches: 80,
          functions: 80
        }
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress','kjhtml','dots','sonarqubeUnit'],
    sonarQubeUnitReporter: {
      sonarQubeVersion: 'LATEST', 
      outputDir: 'junitResult', 
      outputFile: 'testresult.xml', 
      useBrowserName: false,
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    customLaunchers: {
        ChromeHeadless: {
            base: 'Chrome',
            flags: [
            '--headless',
            '--disable-web-security',
            '--disable-setuid-sandbox',
            '--no-sandbox',
            '--remote-debugging-port=9222',]
      }
},
    singleRun :true,
  });
};
