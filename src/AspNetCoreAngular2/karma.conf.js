// Karma configuration

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],

        files: [

            // Polyfills.
            'node_modules/core-js/client/shim.min.js',

            'node_modules/traceur/bin/traceur.js',

            // 'node_modules/reflect-metadata/Reflect.js',

            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',

            // Zone.js dependencies
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/jasmine-patch.js',

            // RxJs.
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            'Frontend/test-main.js',

            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: true},
            {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},

            // {pattern: 'wwwroot/app/test/matchers.js', included: true, watched: true},

            // Our built application code
            {pattern: 'wwwroot/app/**/*.js', included: false, watched: true},

            // paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            //{pattern: 'wwwroot/app/**/*.html', included: false, watched: true},
            //{pattern: 'wwwroot/app/**/*.css', included: false, watched: true},

            // paths to support debugging with source maps in dev tools
            {pattern: 'Frontend/app/**/*.ts', included: false, watched: false},

            ////images
            //{pattern: 'wwwroot/app/**/*.png', included: false, watched: false},
            //{pattern: 'wwwroot/app/**/*.jpg', included: false, watched: false},
            //{pattern: 'wwwroot/app/**/*.svg', included: false, watched: false}
        ],

        proxies: {
            "/app": "/base/wwwroot/app"
        },

        exclude: [
            'node_modules/**/*_spec.js',
        ],

        reporters: ['mocha'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });
};
