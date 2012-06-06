require([
  "namespace",

  // Libs
  "jquery",
  "use!backbone",

  // Module - Include -.
  "modules/ModuleHeader",
  "modules/ModuleFooter",
  "modules/ModuleContentHome",
  "modules/headerDEV1",
  "router"  
],

function(namespace, $, Backbone, ModuleHeader, ModuleFooter, ModuleContentHome, headerDEV1, ExternalRouter) {

  // Defining the application router, you can attach sub routers here.
  /*
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      ":hash": "index",
      "/headerDEV": "headerRouter",
      "/headerWhite": "headerRouter"
    },

    index: function(hash) {
      var route = this;
*/
      /*Render-headerDEV1
      var headerDEV1module = new headerDEV1.Views.headerDEV1();
      // Attach the header to the DOM
      headerDEV1module.render(function(el) {
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

      /*Render-ModuleContentHome
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
/*
    },

    headerRouter: function(hash) {
      var route = this; 
*/
      /*Render-headerDEV1
      var headerDEV1module = new headerDEV1.Views.headerDEV1();
      // Attach the header to the DOM
      headerDEV1module.render(function(el) {
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
/*
    }   


  });
*/
  // Shorthand the application namespace
  var app = namespace.app;

  // Treat the jQuery ready function as the entry point to the application.
  // Inside this function, kick-off all initialization, everything up to this
  // point should be definitions.
  $(function() {
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    //app.router = new Router();
    // app.router = ExternalRouter;
    ExternalRouter.initialize();

    // Trigger the initial route and enable HTML5 History API support
    //Backbone.history.start({ pushState: true });
  });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router.  If the link has a data-bypass
  // attribute, bypass the delegation completely.
  $(document).on("click", "a:not([data-bypass])", function(evt) {
    // Get the anchor href and protcol
    var href = $(this).attr("href");
    var protocol = this.protocol + "//";

    // Ensure the protocol is not part of URL, meaning its relative.
    if (href && href.slice(0, protocol.length) !== protocol &&
        href.indexOf("javascript:") !== 0) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // `Backbone.history.navigate` is sufficient for all Routers and will
      // trigger the correct events.  The Router's internal `navigate` method
      // calls this anyways.
      Backbone.history.navigate(href, true);
    }
  });

});
