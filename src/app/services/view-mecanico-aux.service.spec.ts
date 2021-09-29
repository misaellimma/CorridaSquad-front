import { TestBed } from '@angular/core/testing';

import { ViewMecanicoAuxService } from './view-mecanico-aux.service';

describe('ViewMecanicoAuxService', () => {
  let service: ViewMecanicoAuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewMecanicoAuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
