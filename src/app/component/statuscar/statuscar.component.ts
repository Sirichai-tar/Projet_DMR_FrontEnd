import { Component, OnInit } from '@angular/core';
import { Carregis } from 'src/app/core/services/carregis/carregis';
import { CarregisService } from 'src/app/core/services/carregis/carregis.service';
import { Employadd } from 'src/app/core/services/employadd/employadd';
import { EmployaddService } from 'src/app/core/services/employadd/employadd.service';
import { Register } from 'src/app/core/services/register/register';
import { RegisterService } from 'src/app/core/services/register/register.service';
import { tableStatuscar } from 'src/app/core/services/table-statuscar/table-statuscar';

@Component({
  selector: 'app-statuscar',
  templateUrl: './statuscar.component.html',
  styleUrls: ['./statuscar.component.css']
})
export class StatuscarComponent implements OnInit {


  constructor(
    private carregisService: CarregisService,
    private registerService: RegisterService,
    private employaddService: EmployaddService
  ) { }

  registerDataList: Register[] = [];
  dataList: tableStatuscar[] = [];
  datataget: tableStatuscar = {} as tableStatuscar
  registertaget: Register = {} as Register;
  display: any;


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loadData();
  }

  async loadData() {
    this.datataget.startDate != null
    this.datataget != null
    const registerData = await this.registerService.findAllStatusCar().toPromise();
    this.dataList = registerData as tableStatuscar[];
    this.clearType();
  }

  async status(rows: tableStatuscar) {
    this.datataget.startDate != null
    this.datataget != null
    const register = await this.registerService.findAllStatusCar().toPromise();
  }

  clearType() {
    this.display = {
      fullName: '-',
      telphone: '-',
      carRegis: '-',
      typeCar: '-',
      car: '-'
    } as any;
  }

  async setView(row: tableStatuscar) {
    // clear data ก่อนหน้า 
    this.clearType();

    let resultcarRegis;
    if (row.carRegis) {
      const carRegis = row.carRegis;
      resultcarRegis = await this.carregisService.findByIdRegistercar(carRegis).toPromise();
    }

    this.display.fullName = row.driverName;
    this.display.carRegis = row.carRegis;
    this.display.telphone = row.phonNumber;
    this.display.typeCar = resultcarRegis?.carNature;
    this.display.car = resultcarRegis?.carType;
  }

}
