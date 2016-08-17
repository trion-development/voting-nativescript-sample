"use strict";
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
require('rxjs/Rx');
var TalkService = (function () {
    function TalkService() {
        this.talks = [
            { "id": 1, "speaker": "Thomas", "title": "Angular 2 Quickly", "abstract": "Moderne Webanwendungen in 2017" },
            {
                "id": 2,
                "speaker": "Stefan",
                "title": "Docker für Cloudfähige Microservices",
                "abstract": "Distribute your Problems!"
            },
            { "id": 3, "speaker": "Karsten", "title": "Reactive Everywhere", "abstract": "Watch and observe." },
            {
                "id": 4,
                "speaker": "Markus",
                "title": "jQuery Altlasten heute",
                "abstract": "Wenn das Leiden kein Ende zu haben scheint."
            }
        ];
    }
    TalkService.prototype.getTalk = function (id) {
        var talk = this.talks.filter(function (elem) { return elem.id === id; });
        return Rx_1.Observable.from(talk);
    };
    TalkService.prototype.getTalks = function () {
        return Rx_1.Observable.from([this.talks]);
    };
    TalkService.prototype.setRating = function (id, rating) {
        for (var _i = 0, _a = this.talks; _i < _a.length; _i++) {
            var talk = _a[_i];
            if (talk.id === id) {
                talk.rating = rating;
                return;
            }
        }
    };
    TalkService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TalkService);
    return TalkService;
}());
exports.TalkService = TalkService;
//# sourceMappingURL=talk.service.js.map