import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from './data.model';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  // public Data=[];
  url = 'https://api.github.com/search/repositories?q=';
  constructor(private http: HttpClient) { }

  // getdata():Observable<any>{
  //   return this.http.get<any>(this.url);
  // }
  fetchdata(input) {
    const baseurl = `${this.url}${input}`;
    return this.http.get(baseurl);
  }

  // getdata(a:string,data:Data): Observable<any>{
  //   const baseurl=`${this.url}${a}`;
  //   return this.http.get<any>(baseurl)
  // }
}
