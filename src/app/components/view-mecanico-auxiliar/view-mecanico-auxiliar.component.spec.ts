import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMecanicoAuxiliarComponent } from './view-mecanico-auxiliar.component';

describe('ViewMecanicoAuxiliarComponent', () => {
  let component: ViewMecanicoAuxiliarComponent;
  let fixture: ComponentFixture<ViewMecanicoAuxiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMecanicoAuxiliarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMecanicoAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
