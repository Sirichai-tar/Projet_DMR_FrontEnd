import { Component } from '@angular/core';
// import { ScheduleModule, RecurrenceEditorModule,DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  sidebarNarStatus: boolean = false;
  navBarMain: string = "1";
}
