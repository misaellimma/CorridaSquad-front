import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroCorridaPilotoAlterarComponent } from './carroCorridaPilotoAlterar';

describe('CarroCorridaPilotoAlterarComponent', () => {
  let component: CarroCorridaPilotoAlterarComponent;
  let fixture: ComponentFixture<CarroCorridaPilotoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroCorridaPilotoAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroCorridaPilotoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
