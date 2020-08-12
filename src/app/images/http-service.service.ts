import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpServiceService {
  private _url: string =
    'https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image';
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    // после гет реквеста получим обсервабл
    return this.http.get<any[]>(this._url).pipe(
      map((data) => {
        return data;
      }),
      catchError((error) => this.errorHandler(error))
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
