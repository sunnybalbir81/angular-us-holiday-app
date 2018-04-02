import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class GlobalService {
    data = null;
    constructor(private http: Http) {

    }


    getServiceData(): object {
        return this.data;
    }


    getHolidays(): Observable<any> {

        // ...using get request
        return this.http.get('https://holidayapi.com/v1/holidays?key=3f022640-aa21-41a4-a701-d7d3c6edef0a&country=US&year=2015&month=0')
            
            // ...and calling .json() on the response to return data

            .map((res: Response) => {
                this.data = res.json();
                return res.json()
            })

            //...errors if any

            .catch((error: any) => Observable.throw(error || 'Server error'));

    }


}