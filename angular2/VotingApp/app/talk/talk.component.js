"use strict";
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('rxjs/Rx');
var router_extensions_1 = require('nativescript-angular/router/router-extensions');
var voting_component_1 = require('./voting/voting.component');
var talk_service_1 = require('../shared/talk.service');
var TalkComponent = (function () {
    function TalkComponent(routerExtensions, route, talkService) {
        this.routerExtensions = routerExtensions;
        this.route = route;
        this.talkService = talkService;
    }
    TalkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSubscription = this.route.params
            .flatMap(function (param) { return _this.talkService.getTalk(+param['id']); })
            .subscribe(function (talk) { return _this.talk = talk; });
    };
    TalkComponent.prototype.ngOnDestroy = function () {
        this.routerSubscription.unsubscribe();
    };
    TalkComponent.prototype.talkRated = function (rating) {
        if (this.talk) {
            this.talkService.setRating(this.talk.id, rating);
        }
    };
    TalkComponent.prototype.goBack = function () {
        this.routerExtensions.back();
    };
    TalkComponent = __decorate([
        core_1.Component({
            templateUrl: 'talk/talk.component.html',
            directives: [voting_component_1.VotingComponent]
        }), 
        __metadata('design:paramtypes', [router_extensions_1.RouterExtensions, router_1.ActivatedRoute, talk_service_1.TalkService])
    ], TalkComponent);
    return TalkComponent;
}());
exports.TalkComponent = TalkComponent;
//# sourceMappingURL=talk.component.js.map