import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisTilbudSoegComponent } from './vis-tilbud-soeg.component';

describe('VisTilbudSoegComponent', () => {
  let component: VisTilbudSoegComponent;
  let fixture: ComponentFixture<VisTilbudSoegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisTilbudSoegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisTilbudSoegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
