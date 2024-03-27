import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployaddComponent } from './employadd.component';

describe('EmployaddComponent', () => {
  let component: EmployaddComponent;
  let fixture: ComponentFixture<EmployaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployaddComponent]
    });
    fixture = TestBed.createComponent(EmployaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
