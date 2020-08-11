define(['backbone', 'underscore'], function(Backbone, _) {
    return Backbone.View.extend({
      initialize: function() {
        console.log(_.map);
        console.log( 'Wahoo!' );
      }
    });
});