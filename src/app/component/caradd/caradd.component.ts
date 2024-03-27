import { Component, OnInit } from '@angular/core';
import { Carregis } from 'src/app/core/services/carregis/carregis';
import { CarregisService } from 'src/app/core/services/carregis/carregis.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-caradd',
  templateUrl: './caradd.component.html',
  styleUrls: ['./caradd.component.css'],
  providers: [MessageService]
})
export class CaraddComponent implements OnInit {

  constructor(
    private carregisService: CarregisService,
    private messageService: MessageService
  ) { }

  carregisData: Carregis = {} as Carregis;
  carregisDataList: Carregis[] = [];

  // ngOninit เป็นการใช้ ฟังชัน เมื่อเปิดหน้าครั้งแรกนั้นเพื่อใช้งาน // 
  ngOnInit(): void {
    this.losddata();
  }


  async save() {
    const result = await this.carregisService.save(this.carregisData).toPromise();
    this.messageService.add({ severity: 'success', summary: 'Success', detail: '' });
    this.losddata();
  }

  async losddata() {
    // 1 this.carregisDataList = (await this.carregisService.findAll().toPromise()) as Carregis[];
    const dataList = await this.carregisService.findAll().toPromise();
    this.carregisDataList = dataList as Carregis[]; // convert Carregis[]
  }

  edit(caredit: Carregis) {
    caredit.editStatus = true
  }

  async saveAll() {
    const resultAll = await this.carregisService.saveAll(this.carregisDataList).toPromise();
    this.losddata()
  }

  async saveRecord(saveRecord: Carregis) {
    const resultRecord = await this.carregisService.save(saveRecord).toPromise();
    saveRecord.editStatus = false
  }

  async delete(carId: number) {
    await this.carregisService.delete(carId).toPromise();
    this.losddata()
  }



  // show() {
  //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  // }
}
