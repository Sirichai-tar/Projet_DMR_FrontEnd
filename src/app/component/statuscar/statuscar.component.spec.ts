import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatuscarComponent } from './statuscar.component';

describe('StatuscarComponent', () => {
  let component: StatuscarComponent;
  let fixture: ComponentFixture<StatuscarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatuscarComponent]
    });
    fixture = TestBed.createComponent(StatuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
