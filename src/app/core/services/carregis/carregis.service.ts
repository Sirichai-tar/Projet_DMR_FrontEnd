import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carregis } from './carregis';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class CarregisService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8082";

  url = this.baseUrl + "/Carregis";

  findById(id: number): Observable<Carregis> {
    return this.http.get<Carregis>(this.url + "/findById/" + id)
  }

  findAll(): Observable<Carregis[]> {
    return this.http.get<Carregis[]>(this.url + "/findAll");
  }

  save(carsave: Carregis): Observable<Carregis> {
    return this.http.put<Carregis>(this.url + "/save", carsave);
  }

  saveAll(carsaveList: Carregis[]): Observable<Carregis[]> {
    return this.http.put<Carregis[]>(this.url + "/saveAll", carsaveList);
  }

  delete(cardelete: number): Observable<void> {
    return this.http.delete<void>(this.url + "/deleteById/" + cardelete);
  }

  findByIdRegistercar(carregis: string): Observable<Carregis> {
    return this.http.get<Carregis>(this.url + "/findByIdRegistercar/" + carregis)

  }

}
