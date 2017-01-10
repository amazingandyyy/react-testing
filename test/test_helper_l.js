import jsdom from 'jsdom';

// Set up testing enviroment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html> <html> </html> <body></body>')

// build 'renderComponent' helper that should render a given react class


// build helper for simulating events


// set up chai-jquery


