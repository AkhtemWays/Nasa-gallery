import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class MarsService {
  private _url: string =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' +
    environment.apikey;
  constructor(private http: HttpClient) {}
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this._url).pipe(
      map((data) => data),
      catchError((error) => this.errorHandler(error))
    );
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
