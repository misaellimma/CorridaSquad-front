import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMecanicoAuxComponent } from './view-mecanico-aux.component';

describe('ViewMecanicoAuxComponent', () => {
  let component: ViewMecanicoAuxComponent;
  let fixture: ComponentFixture<ViewMecanicoAuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMecanicoAuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMecanicoAuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
