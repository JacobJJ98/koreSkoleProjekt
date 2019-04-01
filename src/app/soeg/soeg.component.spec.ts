import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoegComponent } from './soeg.component';

describe('SoegComponent', () => {
  let component: SoegComponent;
  let fixture: ComponentFixture<SoegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
