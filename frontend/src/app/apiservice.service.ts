import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  //Connect frontEnd to BackEnd
  apiUrl = 'http://localhost:3000/user';
  //get All Data
  getAllData(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //create data
  createData(data: any): Observable<any> {
    console.log('createapi=>', data)
    return this._http.post(`${this.apiUrl}`, data);
  }

  //delete data
  deleteData(id: any): Observable<any> {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //update Data
  updateData(data: any, id: any): Observable<any> {
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }


  // getSingleData
  getsingledata(id:any):Observable<any>{
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`)
  }
}
