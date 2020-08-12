import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class EpicService {
  private _url: string = 'https://epic.gsfc.nasa.gov/api/natural';
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
