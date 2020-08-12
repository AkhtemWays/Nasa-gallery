import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ImageOfDayHttpService {
  private _url: string =
    'https://api.nasa.gov/planetary/apod?api_key=qO3Zp5Fzuk4SwijHCdMYI81Q4xRZ1J32sJP8XeWn';
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
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
