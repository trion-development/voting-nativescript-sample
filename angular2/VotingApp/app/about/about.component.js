"use strict";
var core_1 = require("@angular/core");
var router_extensions_1 = require('nativescript-angular/router/router-extensions');
var utils_1 = require('utils/utils');
var AboutComponent = (function () {
    function AboutComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    AboutComponent.prototype.openExternalUrl = function () {
        utils_1.openUrl('http://www.trion.de');
    };
    AboutComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "about",
            templateUrl: "about/about.component.html"
        }), 
        __metadata('design:paramtypes', [router_extensions_1.RouterExtensions])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map