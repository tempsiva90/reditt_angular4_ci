import { TestBed, inject } from '@angular/core/testing';

import { RedditServiceService } from './reddit-service.service';

describe('RedditServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedditServiceService]
    });
  });

  it('should be created', inject([RedditServiceService], (service: RedditServiceService) => {
    expect(service).toBeTruthy();
  }));
});
