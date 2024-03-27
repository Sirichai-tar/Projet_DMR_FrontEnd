import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar-nar',
  templateUrl: './sidebar-nar.component.html',
  styleUrls: ['./sidebar-nar.component.css']
})
export class SidebarNarComponent implements OnInit {

  @Input() sidebarNarStatus: boolean = false;
  @Output() clickSlideBar = new EventEmitter<string>();

  list = [
    {
      number: '1',
      name: 'หน้าหลัก',
      icon: 'fa-solid fa-house',
      rount: '/homemain'
    },
    {
      number: '2',
      name: 'เช็คสถานะรถยนต์',
      icon: 'fa-solid fa-list-check',
      rount: '/stattuscar'

    },
    {
      number: '3',
      name: 'เพิ่มทะเบียนรถยนต์',
      icon: 'fa-solid fa-car',
      rount: '/caradd'
    },
    {
      number: '4',
      name: 'เพิ่มคนขับรถยนต์',
      icon: 'fa-solid fa-user-plus',
      rount: '/employadd'
    },
    {
      number: '5',
      name: 'ลงทะเบียนเลือกรถยนต์',
      icon: 'fa-solid fa-registered',
      rount: '/registor'
    },
    {
      number: '6',
      name: 'ประวัติขับรถยนต์',
      icon: 'fa-solid fa-file',
      rount: '/history'
    },
  ]

  constructor() { }
  ngOnInit(): void {

  }
  seticon(value: string){
    this.clickSlideBar.emit(value);
  }

  setNavbar(value: string) {
    this.clickSlideBar.emit(value);
  }

}
