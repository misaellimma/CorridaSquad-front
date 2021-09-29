import { TestBed } from '@angular/core/testing';

import { ViewMecanicoAuxiliarService } from './view-mecanico-auxiliar.service';

describe('ViewMecanicoAuxService', () => {
  let service: ViewMecanicoAuxiliarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewMecanicoAuxiliarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
