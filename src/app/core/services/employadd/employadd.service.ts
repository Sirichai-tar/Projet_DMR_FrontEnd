import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employadd } from './employadd';

@Injectable({
  providedIn: 'root'
})
export class EmployaddService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost:8082";

  url = this.baseUrl + "/Employeecar";

  findById(id: number): Observable<Employadd> {
    return this.http.get<Employadd>(this.url + "/findById/" + id);
  }

  findAll(): Observable<Employadd[]> {
    return this.http.get<Employadd[]>(this.url + "/findAll");
  }

  save(employaddsave: Employadd): Observable<Employadd> {
    return this.http.put<Employadd>(this.url + "/save", employaddsave);
  }

  saveAll(employaddSaveall: Employadd[]): Observable<Employadd[]> {
    return this.http.put<Employadd[]>(this.url + "/saveAll", employaddSaveall)
  }

  delete(employaddDete: number): Observable<void> {
    return this.http.delete<void>(this.url + "/deleteById/" + employaddDete)
  }

  // findByDriverNameAndLastName(dName: string, dLastName: string): Observable<Employadd> {
  //   return this.http.get<Employadd>(this.url + "/findByDriverNameAndLastName/" + dName + "/" + dLastName);
  // }







}
