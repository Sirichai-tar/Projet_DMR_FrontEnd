import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNarComponent } from './sidebar-nar.component';

describe('SidebarNarComponent', () => {
  let component: SidebarNarComponent;
  let fixture: ComponentFixture<SidebarNarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarNarComponent]
    });
    fixture = TestBed.createComponent(SidebarNarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
