import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinetilbudStandardComponent } from './minetilbud-standard.component';

describe('MinetilbudStandardComponent', () => {
  let component: MinetilbudStandardComponent;
  let fixture: ComponentFixture<MinetilbudStandardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinetilbudStandardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinetilbudStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
