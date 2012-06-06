define([
  "namespace",

  // Libs
  "use!backbone"

  // Modules

  // Plugins
],

function(namespace, Backbone) {

  // Create a new module
  var headerDEV1Obj = namespace.module();

  // headerDEV1Obj extendings
  headerDEV1Obj.Model = Backbone.Model.extend({ /* ... */ });
  headerDEV1Obj.Collection = Backbone.Collection.extend({ /* ... */ });
  headerDEV1Obj.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the tutorial template and render it.
  headerDEV1Obj.Views.headerDEV1 = Backbone.View.extend({
    template: "app/templates/headerDEV1.html",

    render: function(done) {
      var view = this;

      // Fetch the template, render it to the View element and call done.
      namespace.fetchTemplate(this.template, function(tmpl) {
        view.el.innerHTML = tmpl();

        // If a done function is passed, call it with the element
        if (_.isFunction(done)) {
          done(view.el);
        }
      });
    }
  });

  // Required, return the module for AMD compliance
  return headerDEV1Obj;

});
