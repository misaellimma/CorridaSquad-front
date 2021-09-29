import { TestBed } from '@angular/core/testing';

import { ViewCorridaEquipeService } from './view-corrida-equipe.service';

describe('ViewCorridaEquipeService', () => {
  let service: ViewCorridaEquipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCorridaEquipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
