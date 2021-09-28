import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeAlterarComponent } from './equipe-alterar.component';

describe('EquipeAlterarComponent', () => {
  let component: EquipeAlterarComponent;
  let fixture: ComponentFixture<EquipeAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipeAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
