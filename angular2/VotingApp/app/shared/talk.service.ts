import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class TalkService {
    private talks: any = [
        {"id": 1, "speaker": "Thomas", "title": "Angular 2 Quickly", "abstract": "Moderne Webanwendungen in 2017"},
        {
            "id": 2,
            "speaker": "Stefan",
            "title": "Docker für Cloudfähige Microservices",
            "abstract": "Distribute your Problems!"
        },
        {"id": 3, "speaker": "Karsten", "title": "Reactive Everywhere", "abstract": "Watch and observe."},
        {
            "id": 4,
            "speaker": "Markus",
            "title": "jQuery Altlasten heute",
            "abstract": "Wenn das Leiden kein Ende zu haben scheint."
        }
    ];

    public getTalk(id: number): Observable<any> {
        let talk = this.talks.filter((elem)=>elem.id === id);
        return Observable.from(talk);
    }

    public getTalks(): Observable<Array<any>> {
        return Observable.from([this.talks]);
    }

    public setRating(id: number, rating: string) {
        for (let talk of this.talks) {
            if (talk.id === id) {
                talk.rating = rating;
                return;
            }
        }
    }
}
