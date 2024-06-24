import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //Connect frontEnd to BackEnd
  apiUrl = 'http://localhost:3000/user';
  //get All Data
  getAllData():Observable<any>
  {
      return this._http.get(`${this.apiUrl}`);
  }

  //create data
  createData(data:any):Observable<any>
  {
    console.log('createapi=>',data)
    return this._http.post(`${this.apiUrl}`,data);
  }


}
