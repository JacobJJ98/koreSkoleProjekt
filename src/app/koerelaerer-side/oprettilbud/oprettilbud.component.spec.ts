import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprettilbudComponent } from './oprettilbud.component';

describe('OprettilbudComponent', () => {
  let component: OprettilbudComponent;
  let fixture: ComponentFixture<OprettilbudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprettilbudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprettilbudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
