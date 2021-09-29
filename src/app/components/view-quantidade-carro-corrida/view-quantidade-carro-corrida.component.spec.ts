import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuantidadeCarroCorridaComponent } from './view-quantidade-carro-corrida.component';

describe('ViewQuantidadeCarroCorridaComponent', () => {
  let component: ViewQuantidadeCarroCorridaComponent;
  let fixture: ComponentFixture<ViewQuantidadeCarroCorridaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuantidadeCarroCorridaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuantidadeCarroCorridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
