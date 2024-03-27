import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, firstValueFrom } from 'rxjs';
import { Carregis } from 'src/app/core/services/carregis/carregis';
import { CarregisService } from 'src/app/core/services/carregis/carregis.service';
import { Employadd } from 'src/app/core/services/employadd/employadd';
import { EmployaddService } from 'src/app/core/services/employadd/employadd.service';
import { Register } from 'src/app/core/services/register/register';
import { RegisterService } from 'src/app/core/services/register/register.service';
import { Statuscar } from 'src/app/core/services/statuscar/status';
import { StatuscarService } from 'src/app/core/services/statuscar/statuscar.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {


  constructor(
    private messageService: MessageService,
    private carregisService: CarregisService,
    private employaddService: EmployaddService,
    private registerService: RegisterService,
    private statuscarService: StatuscarService

  ) { }

  statuscarData: Statuscar = {} as Statuscar;
  statuscarDataList: Statuscar[] = [];
  carregisData: Carregis = {} as Carregis;
  carregisDataList: Carregis[] | undefined = [];
  employaddDataList: Employadd[] | undefined = [];
  employaddData: Employadd = {} as Employadd;
  registerList: Register[] = [];
  registerData: Register = {} as Register;

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    // this.carregisDataList = await this.carregisService.findById()
    this.carregisDataList = await this.carregisService.findAll().toPromise();
    this.employaddDataList = await this.employaddService.findAll().toPromise();
  }



  // await ทำการเรียกฐาน  หรือ  ทำการประมวลขอมูลให้เสร็จก่อนถึงจะทำการทำบรรทัดทัดไป
  // วิธีการเก็บข้อมูลจากฐาน 1 ไปอีก ฐาน 1 แคร์บางตัว
  async save() {
    this.registerData.peopleId = this.employaddData.peopleId    // วิธีการเก็บข้อมูลจากฐาน 1 ไปอีก ฐาน 1 แคร์บางตัว
    this.registerData.carId = this.carregisData.carId    // วิธีการเก็บข้อมูลจากฐาน 1 ไปอีก ฐาน 1 แคร์บางตัว
    const register = await this.registerService.save(this.registerData).toPromise();
    // console.log(this.registerData);

    this.statuscarData.carId = this.registerData.carId
    this.statuscarData.peopleId = this.registerData.peopleId
    this.statuscarData.statusCar = true;
    const status = await this.statuscarService.save(this.statuscarData).toPromise();
    this.ChangeStatusCarRegis(this.registerData.carId);
    this.ChangeStatusEmloyee(this.employaddData.peopleId)
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'บันทึกสำเร็จ' });
  }

  async ChangeStatusCarRegis(carId: number) {
    // find by id
    const carRegis = await this.carregisService.findById(carId).toPromise() as Carregis;
    carRegis.carStatus = true;
    //save
    await this.carregisService.save(carRegis).toPromise();
  }

  async ChangeStatusEmloyee(peploId: number){
    const employadd = await this.employaddService.findById(peploId).toPromise() as Employadd;
    employadd.driverStatus = true
    await this.employaddService.save(employadd).toPromise();
  }

  async delete(registerId: number) {
    await this.registerService.delete(registerId).toPromise();

  }
  async saveAll() {
    const resultAll = await this.registerService.saveAll(this.registerList).toPromise();
    this.messageService.add({ severity: 'success', summary: 'Success', detail: '' });
    this.loadData();
  }

  async findSearch() {
    this.employaddData = await this.employaddService.findById(this.employaddData.peopleId).toPromise() as Employadd;
    this.carregisData = await this.carregisService.findById(this.carregisData.carId).toPromise() as Carregis
  }




}
