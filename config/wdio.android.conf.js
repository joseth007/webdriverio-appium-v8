const path = require('path');
const { config } = require('./wdio.shared.conf');

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = [
    path.join(process.cwd(), './test/specs/android/add-note-screen.spec.js')
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:platformVersion': '13.0',
        'appium:deviceName': 'Pixel 7',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk'),
        "appium:autoGrantPermissions": true,
        //"appium:browserName": 'chrome',
        //"appium:setChromedriverExecutable": 'chromeAppPath'
    }
]

config.services = [['appium', {
    args: {
      port: 4723,
      relaxedSecurity: true
    },
    logPath: './'
  }]];
//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
// config.services = [['appium', {
//     args: {
//         address: 'localhost',
//         port: 4723,
//         relaxedSecurity: true
//     },
//     logPath: './'
// }]];

exports.config = config;