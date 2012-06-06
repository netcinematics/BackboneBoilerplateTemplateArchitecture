// Set the require.js configuration for your application.
// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  paths: {
    // JavaScript folders
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries
    jquery: "../assets/js/libs/jquery",
    jquerythree: "../../assets/js/libs/jquery",
    underscore: "../assets/js/libs/underscore",
    underscorethree: "../../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone",
    backbonetwo: "../../assets/js/libs/backbone",
    backbonethree: "../../assets/js/libs/backbone",



    //External-Router-Definitions-. -Modification-.
    /*loader: 'libs/backbone/loader',*/
    /*jQuery: '../assets/js/libs/jquery',
    Underscore: '../assets/js/libs/underscore',
    Backbone: '../assets/js/libs/backbone',
    templates: './templates',*/

    // Shim Plugin
    use: "../assets/js/plugins/use"
  },

  use: {
    backbone: {
      deps: ["use!underscore", "jquery"],
      attach: "Backbone"
    },

    underscore: {
      attach: "_"
    }
  }
});
