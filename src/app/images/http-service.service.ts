import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpServiceService {
  full: boolean = false;
  private _url: string =
    'https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image';
  constructor(private http: HttpClient) {}

  getData(pagination: number): Observable<any[]> {
    // после гет реквеста получим обсервабл
    return this.http.get<any>(this._url).pipe(
      map((data) => {
        if (pagination >= data.collection.items.length) {
          console.log(this.full);
          this.full = true;
          return data.collection.items;
        } else {
          return data.collection.items.slice(0, pagination);
        }
      }),
      catchError((error) => this.errorHandler(error))
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
