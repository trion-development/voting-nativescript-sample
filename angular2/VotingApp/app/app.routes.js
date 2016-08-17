"use strict";
var router_1 = require('nativescript-angular/router');
var talk_component_1 = require('./talk/talk.component');
var talks_component_1 = require('./talks/talks.component');
var about_component_1 = require('./about/about.component');
var routes = [
    { path: '', redirectTo: '/talks', pathMatch: 'full' },
    { path: 'talks/:id', component: talk_component_1.TalkComponent },
    { path: 'talks', component: talks_component_1.TalksComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.appRouterProviders = [
    router_1.nsProvideRouter(routes, { enableTracing: false })
];
//# sourceMappingURL=app.routes.js.map