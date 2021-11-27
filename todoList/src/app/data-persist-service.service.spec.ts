import { TestBed } from '@angular/core/testing';

import { DataPersistServiceService } from './data-persist-service.service';

describe('DataPersistServiceService', () => {
  let service: DataPersistServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPersistServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
