import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class EpicService {
  full: boolean = false;
  private _url: string = 'https://epic.gsfc.nasa.gov/api/natural';
  constructor(private http: HttpClient) {}

  getData(pagination: number): Observable<any> {
    return this.http.get<any>(this._url).pipe(
      map((data) => {
        if (pagination >= data.length - 1) {
          this.full = true;
          return data.slice(data.length - 4, data.length);
        } else {
          return data.slice(
            pagination === 3 ? 0 : pagination,
            pagination === 3 ? pagination : pagination + 3
          );
        }
      }),
      catchError((error) => this.errorHandler(error))
    );
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server error');
  }
}
