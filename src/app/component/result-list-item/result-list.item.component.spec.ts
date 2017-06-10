import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { ResultListItemComponent } from './result-list.item.component';

describe('ResultListItemComponent', () => {
    let comp: ResultListItemComponent;
    let fixture: ComponentFixture<ResultListItemComponent>;

    beforeEach(() => {
        const routerStub = {
            navigate: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ ResultListItemComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: Router, useValue: routerStub }
            ]
        });
        fixture = TestBed.createComponent(ResultListItemComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

    it('redditLogo defaults to: assets/reddit_logo.jpg', () => {
        expect(comp.redditLogo).toEqual('assets/reddit_logo.jpg');
    });

    describe('showDetail', () => {
        it('makes expected calls', () => {
            const routerStub = fixture.debugElement.injector.get(Router);
            spyOn(routerStub, 'navigate');
            comp.showDetail('google');
            expect(routerStub.navigate).toHaveBeenCalled();
        });
    });

});
