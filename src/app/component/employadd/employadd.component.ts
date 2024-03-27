import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Employadd } from 'src/app/core/services/employadd/employadd';
import { EmployaddService } from 'src/app/core/services/employadd/employadd.service';
import { Statuscar } from 'src/app/core/services/statuscar/status';
import { StatuscarService } from 'src/app/core/services/statuscar/statuscar.service';

@Component({
  selector: 'app-employadd',
  templateUrl: './employadd.component.html',
  styleUrls: ['./employadd.component.css'],
  providers:[MessageService]
})
export class EmployaddComponent implements OnInit {

  constructor(
    private employaddService: EmployaddService,
    private statuscarService: StatuscarService,
    private messageService: MessageService,
    
  ){}

  statusdata: Statuscar = {} as Statuscar;
  employaddsave: Employadd = {} as Employadd;
  employaddDataList: Employadd[] = [];



  ngOnInit(): void {
      this.losddata();
  }
  edit(employadd:Employadd){
    employadd.editStatusEmploy = true
  }

  async losddata(){
    const dataList = await this.employaddService.findAll().toPromise();
    this.employaddDataList = dataList as Employadd[];
  }


  async save(){
    this.messageService.add({severity: 'success', summary:'Success' , detail: '' })
    this.losddata
  }
  async saveRecord( saveRecord: Employadd){
    const resultRecord = await this.employaddService.save(saveRecord).toPromise();
    saveRecord.editStatusEmploy = false
  }

  async saveAll(){
    const resultAll = await this.employaddService.saveAll(this.employaddDataList).toPromise();
    this.losddata()
  }

  async delete(peopleId: number){
   await this.employaddService.delete(peopleId).toPromise();
    this.losddata()
  }



}
