import { TestBed } from '@angular/core/testing';

import { ProjectMgServiceService } from './project-mg-service.service';

describe('ProjectMgServiceService', () => {
  let service: ProjectMgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectMgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
