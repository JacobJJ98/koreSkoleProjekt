import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinetilbudComponent } from './minetilbud.component';

describe('MinetilbudComponent', () => {
  let component: MinetilbudComponent;
  let fixture: ComponentFixture<MinetilbudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinetilbudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinetilbudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
