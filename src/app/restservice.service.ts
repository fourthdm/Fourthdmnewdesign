import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {
  ApiUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient ) { }

 Addimages(formdata: FormData) {
    return this._http.post(this.ApiUrl + '/AddImage', formdata);
  }

  getimageData() {
    return this._http.get(this.ApiUrl + '/AllImages');
  }

}
