import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoerelaererSideComponent } from './koerelaerer-side.component';

describe('KoerelaererSideComponent', () => {
  let component: KoerelaererSideComponent;
  let fixture: ComponentFixture<KoerelaererSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoerelaererSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoerelaererSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
