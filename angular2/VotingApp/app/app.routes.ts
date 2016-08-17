import {RouterConfig} from '@angular/router';
import {nsProvideRouter} from 'nativescript-angular/router';

import {TalkComponent} from './talk/talk.component';
import {TalksComponent} from './talks/talks.component';
import {AboutComponent} from './about/about.component';

const routes: RouterConfig = [
    {path: '', redirectTo: '/talks', pathMatch: 'full'},
    {path: 'talks/:id', component: TalkComponent},
    {path: 'talks', component: TalksComponent},
    {path: 'about', component: AboutComponent}
];

export const appRouterProviders = [
    nsProvideRouter(routes, {enableTracing: false})
];
