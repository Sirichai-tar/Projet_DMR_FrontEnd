import { Component, OnInit } from '@angular/core';
import { Carregis } from 'src/app/core/services/carregis/carregis';
import { CarregisService } from 'src/app/core/services/carregis/carregis.service';
import { Employadd } from 'src/app/core/services/employadd/employadd';
import { EmployaddService } from 'src/app/core/services/employadd/employadd.service';
import { CalendarOptions, EventInput, EventSourceInput } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { RegisterService } from 'src/app/core/services/register/register.service';
import { Register } from 'src/app/core/services/register/register';

@Component({
  selector: 'app-homemain control-content',

  templateUrl: './homemain.component.html',
  styleUrls: ['./homemain.component.css']
})
export class HomemainComponent implements OnInit {

  constructor(
    private carregisService: CarregisService,
    private employaddService: EmployaddService,
    private registerService: RegisterService,

  ) { }

  dataListcoutercar: Carregis[] = [];
  dataListcouteremploy: Employadd[] = [];
  dataListcouterregister: Register[] = [];
  event: EventInput[] = [];
  momColor: string[] = ['red', 'green', 'blue'];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth'
    },
    locale: 'th',
    editable: true,
    navLinks: true, // can click day/week names to navigate views
  };



  ngOnInit(): void {
    this.losddata();
  }

  async losddata() {
    const Listcoutercar = await this.carregisService.findAll().toPromise();
    const Listcouteremploy = await this.employaddService.findAll().toPromise();
    const ListcouterRegistercar = await this.registerService.findAll().toPromise();
    this.dataListcouterregister =  ListcouterRegistercar as Register[];
    this.dataListcoutercar = Listcoutercar as Carregis[];
    this.dataListcouteremploy = Listcouteremploy as Employadd[];

    this.setDataInCalendar();
  }

  async setDataInCalendar() {
    const data: EventInput[] = [];

    const ListcouterRigiscar = await this.registerService.findAll().toPromise() as Register[];
    ListcouterRigiscar.forEach(d => {
      if (d.startDate != null && d.endDate != null) {
        // ALT + 96 => ``
        const color = this.momColor[Math.floor(Math.random() * this.momColor.length)]
        const dataIncarendar = { title: `ชื่อ-นาม: ${d.driverName} || ทะเบียนรถยนต์: ${d.carRegis} || จังหวัด: ${d.registerCounty}`, start: d.startDate, end: d.endDate, color: `${color}` } as any;
        data.push(dataIncarendar);
      }
    });

    this.setEvent(data);
  }

  setEvent(data: EventInput[]) {
    this.event = data;
  }
}
