import { Component, OnInit } from '@angular/core';
import { Carregis } from 'src/app/core/services/carregis/carregis';
import { CarregisService } from 'src/app/core/services/carregis/carregis.service';
import { Employadd } from 'src/app/core/services/employadd/employadd';
import { EmployaddService } from 'src/app/core/services/employadd/employadd.service';
import { Register } from 'src/app/core/services/register/register';
import { RegisterService } from 'src/app/core/services/register/register.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(
    private registerService: RegisterService,
    private carregisService: CarregisService,
    private employaddService: EmployaddService
  ) { }

  registerList: Register[] | undefined = [];
  regisgetData: Register = {} as Register;
  cargerData: Carregis = {} as Carregis;
  employaddgetData: Employadd = {} as Employadd;


  ngOnInit(): void {
    this.loadData();

  }
  async loadData() {
    this.regisgetData.peopleId = this.employaddgetData.peopleId
    this.regisgetData.carId = this.cargerData.carId
    this.registerList = await this.registerService.findAll().toPromise();
    this.cargerData = await this.carregisService.findById(this.cargerData.carId).toPromise() as Carregis;
    this.employaddgetData =await this.employaddService.findById(this.employaddgetData.peopleId).toPromise() as Employadd;
    //  this.loadData();
  }
  async setnameAndcar() {

  }




}
