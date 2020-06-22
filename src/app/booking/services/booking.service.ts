import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Availability } from 'src/app/models/availability.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl = 'http://localhost:8080/resource';

  constructor(private http: HttpClient) { }

  getResourceAvailability(resourceId: number, date: Date): Observable<Availability> {
    return this.http.get<Availability>(
      `${this.baseUrl}/${resourceId}/available`,
      {
        params: {
          datetime: date.toISOString()
        }
      }
    );
  }
}
