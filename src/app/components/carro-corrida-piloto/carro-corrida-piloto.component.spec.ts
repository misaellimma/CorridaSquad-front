import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroCorridaPilotoCorridaPilotoComponent } from './carro-corrida-piloto.component';

describe('CarroCorridaPilotoCorridaPiloto', () => {
  let component: CarroCorridaPilotoCorridaPilotoComponent;
  let fixture: ComponentFixture<CarroCorridaPilotoCorridaPilotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroCorridaPilotoCorridaPilotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroCorridaPilotoCorridaPilotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
