import $ from 'dom7';
import Framework7, { getDevice } from './framework7-custom.js';

// Import F7 Styles
import '../css/framework7-custom.less';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';

// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7';




var device = getDevice();
var baseurl="http://100.69.84.37:8080";



var app = new Framework7({
  data: function() {
     return {
        errorlist:{}
     }
  },
  methods: {
    loadallerrors: function() {
      console.log("test");
    }
  },
  
  name: 'AIOPSUI', // App name
  theme: 'auto', // Automatic theme detection

  darkMode: true,
  el: '#app', // App root element
  component: App, // App main component
  // App store
  store: store,
  // App routes
  routes: routes,

  // Register service worker (only on production build)
  serviceWorker: process.env.NODE_ENV ==='production' ? {
    path: '/service-worker.js',
  } : {},

  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova,
    scrollIntoViewCentered: device.cordova,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
});

app.on('gdetails', function (id) {
  console.log(id); // -> 'foo'
  
});

//app.emit('gdetails', 'foo', 'bar');