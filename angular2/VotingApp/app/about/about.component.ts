import {Component} from "@angular/core";
import {RouterExtensions} from 'nativescript-angular/router/router-extensions';

import {openUrl} from 'utils/utils';

@Component({
    selector: "about",
    templateUrl: "about/about.component.html"
})
export class AboutComponent {

    constructor(private routerExtensions: RouterExtensions) {
    }
    
    private openExternalUrl(){
        openUrl('http://www.trion.de');
    }

    goBack(){
        this.routerExtensions.back();
    }
}
