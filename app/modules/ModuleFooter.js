define([
  "namespace",

  // Libs
  "use!backbone"

  // Modules

  // Plugins
],

function(namespace, Backbone) {

  // Create a new module
  var ModuleFooter = namespace.module();

  // ModuleFooter extendings
  ModuleFooter.Model = Backbone.Model.extend({ /* ... */ });
  ModuleFooter.Collection = Backbone.Collection.extend({ /* ... */ });
  ModuleFooter.Router = Backbone.Router.extend({ /* ... */ });

  // This will fetch the tutorial template and render it.
  ModuleFooter.Views.Tutorial = Backbone.View.extend({
    template: "app/templates/ModuleFooter.html",

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
  return ModuleFooter;

});
