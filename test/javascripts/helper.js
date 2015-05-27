var jsdom = require('jsdom').jsdom
global.document  = jsdom('<html><body></body></html>')
global.window    = document.parentWindow
global.navigator = window.navigator

global.React = require('react/addons')
global.TestUtils = React.addons.TestUtils
