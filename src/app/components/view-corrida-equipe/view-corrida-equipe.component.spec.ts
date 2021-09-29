import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCorridaEquipeComponent } from './view-corrida-equipe.component';

describe('ViewCorridaEquipeComponent', () => {
  let component: ViewCorridaEquipeComponent;
  let fixture: ComponentFixture<ViewCorridaEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCorridaEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCorridaEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
