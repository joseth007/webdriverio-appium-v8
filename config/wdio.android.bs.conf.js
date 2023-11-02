require('dotenv').config()
const { config } = require('./wdio.shared.conf');
//
// ============
// Browserstack Credentials
// ============
config.user = process.env.BROWSERSTACK_USERNAME;
config.key = process.env.BROWSERSTACK_ACCESS_KEY;
//
// ============
// Specs
// ============
config.specs = [
    './test/specs/android/delete-note-screen.spec.js'
];

//
// ============
// Capabilities
// ============
config.capabilities = [
    {
        'platformName' : "android",
        'appium:platformVersion': '14.0',
        'appium:deviceName': 'Google Pixel 8 Pro',
        'appium:automationName': 'UiAutomator2',
        'appium:app': "bs://308df03d21928a0b6e9c080241b2a51dd83a740a",
        "appium:autoGrantPermissions": true
    }
]

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

config.services = ['browserstack'];

exports.config = config;