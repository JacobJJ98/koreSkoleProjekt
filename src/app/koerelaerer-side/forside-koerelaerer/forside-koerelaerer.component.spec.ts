import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForsideKoerelaererComponent } from './forside-koerelaerer.component';

describe('ForsideKoerelaererComponent', () => {
  let component: ForsideKoerelaererComponent;
  let fixture: ComponentFixture<ForsideKoerelaererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForsideKoerelaererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForsideKoerelaererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
