import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoerelaererComponent } from './koerelaerer.component';

describe('KoerelaererComponent', () => {
  let component: KoerelaererComponent;
  let fixture: ComponentFixture<KoerelaererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoerelaererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoerelaererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
