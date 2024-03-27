import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';
import { tableStatuscar } from '../table-statuscar/table-statuscar';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8082";

  url = this.baseUrl + "/Register";


  findAll(): Observable<Register[]> {
    return this.http.get<Register[]>(this.url + "/findAll");
  }

  save(registersave: Register): Observable<Register> {
    return this.http.put<Register>(this.url + "/save", registersave);
  }


  saveAll(registerList: Register[]): Observable<Register[]> {
    return this.http.put<Register[]>(this.url + "/saveAll", registerList)
  }

  delete(registerDelete: Number): Observable<void> {
    return this.http.delete<void>(this.url + "/deleteById/" + registerDelete)
  }

  findAllStatusCar(): Observable<tableStatuscar[]> {
    return this.http.get<tableStatuscar[]>(this.url + "/findAllStatusCar");
  }

}
