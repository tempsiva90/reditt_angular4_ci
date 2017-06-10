import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { RedditService } from '../../service/reddit-service';
import { RedditdetailComponent } from './redditdetail.component';

describe('RedditdetailComponent', () => {
    let comp: RedditdetailComponent;
    let fixture: ComponentFixture<RedditdetailComponent>;

    beforeEach(() => {
        const activatedRouteStub = {
            params: {
                subscribe: () => ({})
            }
        };
        const routerStub = {};
        const mdSnackBarStub = {};
        const redditServiceStub = {
            getPost: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ RedditdetailComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: ActivatedRoute, useValue: activatedRouteStub },
                { provide: Router, useValue: routerStub },
                { provide: MdSnackBar, useValue: mdSnackBarStub },
                { provide: RedditService, useValue: redditServiceStub }
            ]
        });
        fixture = TestBed.createComponent(RedditdetailComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });



});
