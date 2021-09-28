import { TestBed } from '@angular/core/testing';

import { CarroCorridaPilotoService } from './carro-corrida-piloto.service';

describe('CarroCorridaPilotoService', () => {
  let service: CarroCorridaPilotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroCorridaPilotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
