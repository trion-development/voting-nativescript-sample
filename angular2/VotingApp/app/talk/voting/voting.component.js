"use strict";
var core_1 = require('@angular/core');
var VotingComponent = (function () {
    function VotingComponent() {
        this.rated = new core_1.EventEmitter();
        this.ratings = ['top', 'ok', 'meh'];
        this.smileys = { top: ':-)', ok: ':-|', meh: ':-(' };
    }
    VotingComponent.prototype.ngOnInit = function () {
        if (this.initialRating) {
            this.currentRating = this.initialRating;
        }
    };
    VotingComponent.prototype.switchRating = function (newRating) {
        if (this.isHidden(newRating)) {
            return;
        }
        this.currentRating = (this.currentRating === newRating ? '' : newRating);
        this.rated.emit(this.currentRating);
    };
    VotingComponent.prototype.isHidden = function (rating) {
        return this.currentRating && this.currentRating !== rating;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], VotingComponent.prototype, "initialRating", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], VotingComponent.prototype, "rated", void 0);
    VotingComponent = __decorate([
        core_1.Component({
            selector: 'voting',
            templateUrl: 'talk/voting/voting.component.html',
            styleUrls: ['talk/voting/voting.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], VotingComponent);
    return VotingComponent;
}());
exports.VotingComponent = VotingComponent;
//# sourceMappingURL=voting.component.js.map