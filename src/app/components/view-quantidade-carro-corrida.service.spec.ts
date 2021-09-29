import { TestBed } from '@angular/core/testing';

import { ViewQuantidadeCarroCorridaService } from '../services/view-quantidade-carro-corrida.service';

describe('ViewQuantidadeCarroCorridaService', () => {
  let service: ViewQuantidadeCarroCorridaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewQuantidadeCarroCorridaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
