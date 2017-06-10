import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RedditappComponent } from './redditapp.component';

describe('RedditappComponent', () => {
    let comp: RedditappComponent;
    let fixture: ComponentFixture<RedditappComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ RedditappComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(RedditappComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
