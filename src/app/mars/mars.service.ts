import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class MarsService {
  full: boolean = false;
  data: any;
  private _url: string =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=' +
    environment.apikey;
  constructor(private http: HttpClient) {}
  getData(pagination: number): Observable<any[]> {
    return this.http.get<any>(this._url).pipe(
      map((data) => {
        if (data.photos.length - 1 <= pagination) {
          this.full = true;
          return data.photos.slice(
            data.photos.length - 4,
            data.photos.length - 1
          );
        } else {
          return data.photos.slice(
            pagination === 4 ? 0 : pagination,
            pagination === 4 ? pagination : pagination + 4
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
