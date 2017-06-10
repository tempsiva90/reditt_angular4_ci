import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditappComponent } from './redditapp.component';

describe('RedditappComponent', () => {
  let component: RedditappComponent;
  let fixture: ComponentFixture<RedditappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
