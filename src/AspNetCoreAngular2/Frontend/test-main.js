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
    .filter(isBuiltFile);

var map = {
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular'
};

var packages = {
    'app':  { main: 'main.js',  defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
};
var packageNames = [
    'common',
    'common/testing',
    'compiler',
    'compiler/testing',
    'core',
    'core/testing',
    'http',
    'http/testing',
    'platform-browser',
    'platform-browser/testing',
    'platform-browser-dynamic',
    'platform-browser-dynamic/testing',
    'router',
    'router/testing',
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

    testing.TestBed.initTestEnvironment(
        testingBrowser.BrowserDynamicTestingModule,
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

