import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../common/global.service';

@Component({
    selector: 'app-holidays',
    templateUrl: './holidays.component.html',
    styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
    holidaysData: Array<any> = [];
    constructor(private globalService: GlobalService) {

    }

    getFullDate(date){
        return new Date(date);
    }

    ngOnInit() {
        this.globalService.getHolidays().subscribe((response) => {
            this.holidaysData = Object.keys(response.holidays);
        })
    }

}
