import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReditContainerComponent } from './redit-container.component';

describe('ReditContainerComponent', () => {
  let component: ReditContainerComponent;
  let fixture: ComponentFixture<ReditContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReditContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
