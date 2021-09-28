import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MecanicoAlterarComponent } from './mecanico-alterar.component';

describe('MecanicoAlterarComponent', () => {
  let component: MecanicoAlterarComponent;
  let fixture: ComponentFixture<MecanicoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MecanicoAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MecanicoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
