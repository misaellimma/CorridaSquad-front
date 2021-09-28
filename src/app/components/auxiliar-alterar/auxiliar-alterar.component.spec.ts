import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliarAlterarComponent } from './auxiliar-alterar.component';

describe('AuxiliarAlterarComponent', () => {
  let component: AuxiliarAlterarComponent;
  let fixture: ComponentFixture<AuxiliarAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliarAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliarAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
