import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statuscar } from './status';

@Injectable({
  providedIn: 'root'
})
export class StatuscarService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8082";

  url = this.baseUrl + "/Statuscar";

  findAll(): Observable<Statuscar[]> {
    return this.http.get<Statuscar[]>(this.url + "/findAll" )
  }

  save(statuscarsave: Statuscar): Observable<Statuscar>{
    return this.http.put<Statuscar>(this.url + "/save" , statuscarsave)
  }

  deleteByid(statuscardelete: number):Observable<void>{
    return this.http.delete<void>(this.url + "/deleteById/" + statuscardelete)
  }
}
