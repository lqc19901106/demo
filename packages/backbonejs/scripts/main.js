requirejs.config({
    paths: {
        backbone: './node_modules/backbone/backbone',
        jquery: './node_modules/jquery/dist/jquery',
        underscore: './node_modules/underscore/underscore',
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        jquery: {
            exports: '$'
        }
    }
});

require(["./scripts/common"], function(AppView) {
    new AppView();
});