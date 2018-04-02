import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../common/global.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    detailsData: Array<any> = [];
    selectedDate: string;
    constructor(private globalService: GlobalService, private route: ActivatedRoute) {

    }

    getFullDate(date) {
        return new Date(date);
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.selectedDate = params['date'];
            if (this.globalService.data) {
                this.detailsData = this.globalService.data.holidays[this.selectedDate];
            } else {
                this.globalService.getHolidays().subscribe((response) => {
                    this.detailsData = response.holidays[this.selectedDate];
                })
            }
        });

    }


}
