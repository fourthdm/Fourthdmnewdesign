import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {
  ApiUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient ) { }

  AllImages(){
    return this._http.get(this.ApiUrl + '/AllImages');
  }
}
