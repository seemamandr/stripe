import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  public BASE_API = 'https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4';

  constructor(private http: HttpClient) { }


  public doLocation() {
    const url = this.BASE_API;
    return this.http.get(url);
  }
}
