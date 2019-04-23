import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinetilbudItemComponent } from './minetilbud-item.component';

describe('MinetilbudItemComponent', () => {
  let component: MinetilbudItemComponent;
  let fixture: ComponentFixture<MinetilbudItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinetilbudItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinetilbudItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
