import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class TechnologyService {
  private _url: string =
    'https://api.nasa.gov/techtransfer/patent/?engine&api_key=' +
    environment.apikey;

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<any>(this._url).pipe(
      map((data) => data.results),
      catchError((error) => this.errorHandler(error))
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
