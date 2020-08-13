import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ImageOfDayHttpService {
  private _url: string =
    'https://api.nasa.gov/planetary/apod?api_key=' + environment.apikey;
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http
      .get<any[]>(this._url)
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
