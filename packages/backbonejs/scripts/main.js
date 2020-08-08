requirejs.config({
    baseUrl: 'node_modules',
    paths: {
        backbone: 'backbone/backbone-min.js',
        jquery: 'jquery/dist/jquery.min.js',
        underscore: 'underscore/underscore-min.js',
    },
    shim: {
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});


define([
    './common'
], function(AppView) {
    new AppView;
    
});
