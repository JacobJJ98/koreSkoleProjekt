import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinprofilComponent } from './minprofil.component';

describe('MinprofilComponent', () => {
  let component: MinprofilComponent;
  let fixture: ComponentFixture<MinprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
