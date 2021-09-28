import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridaAlterarComponent } from './corrida-alterar.component';

describe('CorridaAlterarComponent', () => {
  let component: CorridaAlterarComponent;
  let fixture: ComponentFixture<CorridaAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorridaAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorridaAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
