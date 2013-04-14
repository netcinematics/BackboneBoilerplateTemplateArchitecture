// Filename: router.js
define([
  'jquery',
  'use!underscore',
  'use!backbone',
  'views/projects/list',
  "modules/headerDEV1",
  "modules/headerBlack_1",
  "modules/headerWhite_1",
  "modules/ModuleHeader",
  "modules/ModuleContentHome"

], function($, _, Backbone, projectListView, headerDEV1, headerBlack_1, headerWhite_1, ModuleHeader, ModuleContentHome ){

  var AppRouter = Backbone.Router.extend({

    routes: {
      // Define some URL routes
      "": "index",
      ":hash": "index",
      '/projects': 'showProjects',      
      "/headerDEV": "headerRouter",
      "/headerWhite": "headerRouter",
      "/content1": "contentRouter",
      
      // Default
      '*actions': 'defaultAction'
    },
    index: function(hash) {
      var route = this;
           /*Render-headerBlack_1*/
      var headerBlack_1module = new headerBlack_1.Views.headerBlack_1();
      // Attach the header to the DOM
      headerBlack_1module.render(function(el) {
        $("#headerMain").html(el);

        // Fix for hashes in pushState and hash fragment
        if (hash && !route._alreadyTriggered) {
          // Reset to home, pushState support automatically converts hashes
          Backbone.history.navigate("", false);

          // Trigger the default browser behavior
          location.hash = hash;

          // Set an internal flag to stop recursive looping
          route._alreadyTriggered = true;
        }
      }); /**-**/


      /*Render-ModuleFooter
      var footerModule = new ModuleFooter.Views.Tutorial();
      // Attach the tutorial to the DOM
      footerModule.render(function(el) {
        $("#footerMain").html(el);

        // Fix for hashes in pushState and hash fragment
        if (hash && !route._alreadyTriggered) {
          // Reset to home, pushState support automatically converts hashes
          Backbone.history.navigate("", false);

          // Trigger the default browser behavior
          location.hash = hash;

          // Set an internal flag to stop recursive looping
          route._alreadyTriggered = true;        
        }
      });  /**-**/


    },
    headerRouter: function(hash){

     var route = this;
      /*Render-headerBlack_1*/
      var headerBlack_1module = new headerBlack_1.Views.headerBlack_1();
      // Attach the header to the DOM
      headerBlack_1module.render(function(el) {
        $("#headerMain").html(el);

        // Fix for hashes in pushState and hash fragment
        if (hash && !route._alreadyTriggered) {
          // Reset to home, pushState support automatically converts hashes
          Backbone.history.navigate("", false);

          // Trigger the default browser behavior
          location.hash = hash;

          // Set an internal flag to stop recursive looping
          route._alreadyTriggered = true;
        }
      }); /**-**/

      /*Render-ModuleHeader
      var headerModule = new ModuleHeader.Views.Tutorial();
      // Attach the header to the DOM
      headerModule.render(function(el) {
        $("#headerMain").html(el);

        // Fix for hashes in pushState and hash fragment
        if (hash && !route._alreadyTriggered) {
          // Reset to home, pushState support automatically converts hashes
          Backbone.history.navigate("", false);

          // Trigger the default browser behavior
          location.hash = hash;

          // Set an internal flag to stop recursive looping
          route._alreadyTriggered = true;
        }
      }); /**-**/

    },    
    contentRouter: function(hash){
      alert('router-content')

      
      var route = this; /*Render-ModuleContentHome*/
      var contentHomeModule = new ModuleContentHome.Views.Tutorial();
      // Attach the tutorial to the DOM
      contentHomeModule.render(function(el) {
        $("#contentMain").html(el);

        // Fix for hashes in pushState and hash fragment
        if (hash && !route._alreadyTriggered) {
          // Reset to home, pushState support automatically converts hashes
          Backbone.history.navigate("", false);

          // Trigger the default browser behavior
          location.hash = hash;

          // Set an internal flag to stop recursive looping
          route._alreadyTriggered = true;        
        }
      });  /**-**/ 

    },
    showProjects: function(){
debugger;      
      // Call render on the module we loaded in via the dependency array
      // 'views/projects/list'
      projectListView.render();
    },
    defaultAction: function(actions){  
      // We have no matching route, lets display the home page 
      //mainHomeView.render(); 
    }
  });

  var initialize = function(){    
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
