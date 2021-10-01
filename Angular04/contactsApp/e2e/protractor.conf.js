module.exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['features/*.feature'],
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'custom',
    frameworkPath: '../node_modules/protractor-cucumber-framework',
    cucumberOpts: {
        require: ['./steps/*.steps.ts']
    },
    params: {
        env: {
            hostname: 'http://localhost:4200' //address of app
        }
    }
}