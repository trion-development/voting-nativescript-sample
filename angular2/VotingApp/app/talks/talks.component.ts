import {Component, OnInit} from '@angular/core';
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {TalkService} from '../shared/talk.service';

@Component({
  templateUrl: 'talks/talks.component.html',
  directives: [NS_ROUTER_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class TalksComponent implements OnInit {

  private talks:Array<any>;

  constructor(private talkService:TalkService){
  }

  ngOnInit():any{
    this.talkService.getTalks().subscribe((talks)=>this.talks=talks);
  }

}
