import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotoAlterarComponent } from './piloto-alterar.component';

describe('PilotoAlterarComponent', () => {
  let component: PilotoAlterarComponent;
  let fixture: ComponentFixture<PilotoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotoAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
