import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditdetailComponent } from './redditdetail.component';

describe('RedditdetailComponent', () => {
  let component: RedditdetailComponent;
  let fixture: ComponentFixture<RedditdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
