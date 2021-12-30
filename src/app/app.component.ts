import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Location } from './Location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gpsmonitor-web';
  startDate: string = '';
  endDate: string = '';
  locations: Location[] = [];

  constructor(private http: HttpClient) {}

  sendRequest(): Observable<Location[]> {
   return this.http.get<Location[]>("http://localhost:8080/location?start_date=" + this.startDate + "&end_date=" + this.endDate);
  }

  search(): void {
    this.sendRequest().subscribe(response => this.locations = response)
  }
}
