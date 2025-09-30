import { TestBed } from '@angular/core/testing';

import { EnderecoApi } from './endereco-api';

describe('EnderecoApi', () => {
  let service: EnderecoApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
