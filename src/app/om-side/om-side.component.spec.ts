import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmSideComponent } from './om-side.component';

describe('OmSideComponent', () => {
  let component: OmSideComponent;
  let fixture: ComponentFixture<OmSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
