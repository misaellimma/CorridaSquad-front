import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoAlterarComponent } from './servico-alterar.component';

describe('ServicoAlterarComponent', () => {
  let component: ServicoAlterarComponent;
  let fixture: ComponentFixture<ServicoAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoAlterarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
