import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class TechnologyService {
  full: boolean = false;
  private _url: string =
    'https://api.nasa.gov/techtransfer/patent/?engine&api_key=' +
    environment.apikey;

  constructor(private http: HttpClient) {}
  getData(pagination: number): Observable<any> {
    return this.http.get<any>(this._url).pipe(
      map((data) => {
        if (data.results.length <= pagination) {
          this.full = true;
          return data.results;
        } else {
          return data.results.slice(0, pagination);
        }
      }),
      catchError((error) => this.errorHandler(error))
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
