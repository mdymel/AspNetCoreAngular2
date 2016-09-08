// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

// Cancel Karma's synchronous start,
// we will call `__karma__.start()` later, once all the specs are loaded.
__karma__.loaded = function () { };

function isJsFile(path) {
    return path.slice(-3) == '.js';
}

function isSpecFile(path) {
    return path.slice(-8) == '.spec.js';
}

function isBuiltFile(path) {
    var builtPath = '/base/wwwroot/';
    return isJsFile(path) && (path.substr(0, builtPath.length) == builtPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
    .filter(isSpecFile)
    .filter(isBuiltFile)
    .filter(function(path) {
        var match =
            path === "/base/wwwroot/app/tests/sanityTests.spec.js" ||
            path === "/base/wwwroot/app/home/home.component.spec.js" ||
            path === "/base/wwwroot/app/home/login-form.component.spec.js" ||

            path === "/base/wwwroot/app/fassaden/home/validators/blinds-dimensions-validator.spec.js" ||
            path === "/base/wwwroot/app/fassaden/variants/validators/box-sizing-validator.spec.js" ||
            path === "/base/wwwroot/app/lamellen/home/lm-blinds-dimensions.component.spec.js" ||
            path === "/base/wwwroot/app/lamellen/home/lm-slats-selector.component.spec.js" ||
            path === "/base/wwwroot/app/lamellen/home/validators/blinds-dimensions-validator.spec.js" ||
            path === "/base/wwwroot/app/lamellen/home/validators/product-type-validator.spec.js" ||
            path === "/base/wwwroot/app/lamellen/home/validators/slats-selector-validator.spec.js" ||
            path === "/base/wwwroot/app/lamellen/lm-configurator.spec.js" ||
            path === "/base/wwwroot/app/lamellen/technical/validators/box-mounting-validator.spec.js" ||
            path === "/base/wwwroot/app/lamellen/variants/validators/box-type-validator.spec.js" ||
            path === "/base/wwwroot/app/lamellen/variants/validators/colors-validator.spec.js" ||
            path === "/base/wwwroot/app/orders/orders.component.spec.js" ||
            path === "/base/wwwroot/app/passwordReset/passwordreset-step1.component.spec.js" ||
            path === "/base/wwwroot/app/shared/base/configurator-base-component.spec.js" ||
            path === "/base/wwwroot/app/shared/base/configurator-question-base.component.spec.js" ||
            path === "/base/wwwroot/app/shared/components/configuratorQuestions/validators/commutator-validator.spec.js" ||
            path === "/base/wwwroot/app/shared/components/configuratorQuestions/validators/gear-type-validator.spec.js" ||
            path === "/base/wwwroot/app/shared/components/configuratorQuestions/validators/guide-type-validator.spec.js" ||
            path === "/base/wwwroot/app/shared/components/configuratorQuestions/validators/position-validator.spec.js" ||
            path === "/base/wwwroot/app/shared/components/configuratorQuestions/validators/radio-validator.spec.js" ||
            path === "/base/wwwroot/app/shared/components/gr-slider.component.spec.js" ||
            path === "/base/wwwroot/app/shared/components/left-menu.component.spec.js" ||
            path === "/base/wwwroot/app/shared/components/phone-number.component.spec.js" ||
            path === "/base/wwwroot/app/shared/configurator-updater.spec.js" ||
            path === "/base/wwwroot/app/shared/pipes/price.pipe.spec.js" ||
            path === "/base/wwwroot/app/shared/pipes/ral-color.pipe.spec.js" ||
            path === "/base/wwwroot/app/shared/pipes/values.pipe.spec.js" ||
            path === "/base/wwwroot/app/shared/services/configurator.service.spec.js" ||

            false;
        // if (!match) console.log(path);
        return match;});

var map = {
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular',
    'moment': 'node_modules/moment/moment.js',
    'primeng': "node_modules/primeng"
};

var packages = {
    'app':  { main: 'main.js',  defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
};
var packageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'testing',
    'upgrade',
    'forms'
];

// add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
packageNames.forEach(function(pkgName) {
    packages["@angular/" + pkgName] = { main: 'index.js', defaultExtension: 'js' };
});


// Load our SystemJS configuration.
System.config({
    baseURL: '/base/',
    defaultJSExtensions: true,
    map: map,
    packages: packages
});

Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing')
]).then(function (providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];

    testing.TestBed.initTestEnvironment(testingBrowser.BrowserDynamicTestingModule,
        testingBrowser.platformBrowserDynamicTesting());

}).then(function() {
    // Finally, load all spec files.
    // This will run the tests directly.
    return Promise.all(
        allSpecFiles.map(function (moduleName) {
            // console.log("importing " + moduleName);
            return System.import(moduleName);
        })
    );
}).then(__karma__.start, __karma__.error);

