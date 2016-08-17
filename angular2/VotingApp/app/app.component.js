"use strict";
var core_1 = require("@angular/core");
var router_1 = require('nativescript-angular/router');
var talk_service_1 = require('./shared/talk.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            providers: [talk_service_1.TalkService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map