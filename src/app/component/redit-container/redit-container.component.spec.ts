import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RedditService } from '../../service/reddit-service';
import { ReditContainerComponent } from './redit-container.component';

describe('ReditContainerComponent', () => {
    let comp: ReditContainerComponent;
    let fixture: ComponentFixture<ReditContainerComponent>;

    beforeEach(() => {
        const redditServiceStub = {
            posts: {}
        };
        TestBed.configureTestingModule({
            declarations: [ ReditContainerComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: RedditService, useValue: redditServiceStub }
            ]
        });
        fixture = TestBed.createComponent(ReditContainerComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('postName defaults to: google', () => {
        expect(comp.postName).toEqual('google');
    });

});
