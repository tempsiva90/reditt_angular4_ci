import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakComponentComponent } from './snak-component.component';

describe('SnakComponentComponent', () => {
  let component: SnakComponentComponent;
  let fixture: ComponentFixture<SnakComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
