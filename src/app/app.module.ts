import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {MatCardModule} from '@angular/material/card';
import { RoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { DetailsComponent } from './details/details.component';
import { GlobalService } from './common/global.service';


@NgModule({
  declarations: [
    AppComponent,
    HolidaysComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatCardModule,
    RoutingModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
