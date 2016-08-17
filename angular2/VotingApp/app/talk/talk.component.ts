import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/Rx';
import {RouterExtensions} from 'nativescript-angular/router/router-extensions';

import {VotingComponent} from './voting/voting.component';
import {TalkService} from '../shared/talk.service';

@Component({
    templateUrl: 'talk/talk.component.html',
    directives: [VotingComponent]
})
export class TalkComponent implements OnInit, OnDestroy {

    private talk: any;
    private routerSubscription: Subscription;

    constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute, private talkService: TalkService) {
    }

    ngOnInit(): any {
        this.routerSubscription = this.route.params
            .flatMap((param) => this.talkService.getTalk(+param['id']))
            .subscribe((talk)=>this.talk = talk);
    }

    ngOnDestroy(): any {
        this.routerSubscription.unsubscribe();
    }

    talkRated(rating: string) {
        if (this.talk) {
            this.talkService.setRating(this.talk.id, rating)
        }
    }

    goBack(){
        this.routerExtensions.back();
    }
}
