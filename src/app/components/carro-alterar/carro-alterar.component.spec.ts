import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroAlterarComponent } from './carro-alterar.component';

describe('CarroAlterarComponent', () => {
  let component: CarroAlterarComponent;
  let fixture: ComponentFixture<CarroAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarroAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
