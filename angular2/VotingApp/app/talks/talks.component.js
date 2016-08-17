"use strict";
var core_1 = require('@angular/core');
var router_1 = require('nativescript-angular/router');
var router_2 = require('@angular/router');
var talk_service_1 = require('../shared/talk.service');
var TalksComponent = (function () {
    function TalksComponent(talkService) {
        this.talkService = talkService;
    }
    TalksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.talkService.getTalks().subscribe(function (talks) { return _this.talks = talks; });
    };
    TalksComponent = __decorate([
        core_1.Component({
            templateUrl: 'talks/talks.component.html',
            directives: [router_1.NS_ROUTER_DIRECTIVES, router_2.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [talk_service_1.TalkService])
    ], TalksComponent);
    return TalksComponent;
}());
exports.TalksComponent = TalksComponent;
//# sourceMappingURL=talks.component.js.map