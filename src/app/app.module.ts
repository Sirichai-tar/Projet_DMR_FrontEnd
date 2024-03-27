import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainComponent } from './component/main/main.component';
import { SidebarNarComponent } from './component/sidebar-nar/sidebar-nar.component';
import { RegisterComponent } from './component/register/register.component';
import { HomemainComponent } from './component/homemain/homemain.component';
import { StatuscarComponent } from './component/statuscar/statuscar.component';
import { HttpClientModule } from '@angular/common/http';
// import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { CaraddComponent } from './component/caradd/caradd.component';
import { EmployaddComponent } from './component/employadd/employadd.component';
import { HistoryComponent } from './component/history/history.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TooltipModule } from 'primeng/tooltip';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    SidebarNarComponent,
    RegisterComponent,
    HomemainComponent,
    StatuscarComponent,
    CaraddComponent,
    EmployaddComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ScheduleModule,
    // RecurrenceEditorModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule,
    FullCalendarModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
