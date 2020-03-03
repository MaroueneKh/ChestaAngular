import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePatientsComponent } from './historique-patients.component';

describe('HistoriquePatientsComponent', () => {
  let component: HistoriquePatientsComponent;
  let fixture: ComponentFixture<HistoriquePatientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquePatientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
