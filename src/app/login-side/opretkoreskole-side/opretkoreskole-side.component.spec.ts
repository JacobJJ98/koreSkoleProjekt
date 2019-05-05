import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpretkoreskoleSideComponent } from './opretkoreskole-side.component';

describe('OpretkoreskoleSideComponent', () => {
  let component: OpretkoreskoleSideComponent;
  let fixture: ComponentFixture<OpretkoreskoleSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpretkoreskoleSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpretkoreskoleSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
