import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoereskoleComponent } from './koereskole.component';

describe('KoereskoleComponent', () => {
  let component: KoereskoleComponent;
  let fixture: ComponentFixture<KoereskoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoereskoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoereskoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
