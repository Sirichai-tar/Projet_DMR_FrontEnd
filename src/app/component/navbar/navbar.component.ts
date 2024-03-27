import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
 @Output()sidebarNarToggled = new EventEmitter<boolean>();
 menuStatus: boolean = false;

  constructor(){}

  ngOnInit(): void {
      
  }
  sidebarnarToggle(){
    this.menuStatus=!this.menuStatus;
    this.sidebarNarToggled.emit(this.menuStatus);
    
  }

}
