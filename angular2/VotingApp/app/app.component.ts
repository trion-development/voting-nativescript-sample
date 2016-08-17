import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';

import {TalkService} from './shared/talk.service';

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
    directives: [NS_ROUTER_DIRECTIVES],
    providers: [TalkService]
})
export class AppComponent {

}
