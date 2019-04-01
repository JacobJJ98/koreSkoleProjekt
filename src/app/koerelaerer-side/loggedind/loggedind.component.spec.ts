import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedindComponent } from './loggedind.component';

describe('LoggedindComponent', () => {
  let component: LoggedindComponent;
  let fixture: ComponentFixture<LoggedindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
