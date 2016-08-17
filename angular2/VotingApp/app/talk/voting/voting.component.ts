import {Input, Output, EventEmitter, Component, OnInit} from '@angular/core';

@Component({
    selector: 'voting',
    templateUrl: 'talk/voting/voting.component.html',
    styleUrls: ['talk/voting/voting.component.css']
})
export class VotingComponent implements OnInit{

    @Input() initialRating: string;
    @Output() rated: EventEmitter<any> = new EventEmitter<any>();

    currentRating: string;
    private ratings = ['top', 'ok', 'meh'];
    private smileys = {top: ':-)', ok: ':-|', meh: ':-('};

    ngOnInit(): any {
        if(this.initialRating){
            this.currentRating = this.initialRating;
        }
    }

    switchRating(newRating: string): void {
        if (this.isHidden(newRating)) {
            return;
        }
        this.currentRating = (this.currentRating === newRating ? '' : newRating);
        this.rated.emit(this.currentRating);
    }

    private isHidden(rating: string): boolean {
        return this.currentRating && this.currentRating !== rating;
    }
}
