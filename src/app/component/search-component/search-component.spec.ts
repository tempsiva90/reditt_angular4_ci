import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RedditService } from '../../service/reddit-service';
import { FormBuilder } from '@angular/forms';
import { SearchComponent } from './search-component';

describe('SearchComponent', () => {
    let comp: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(() => {
        const redditServiceStub = {
            getPostList: () => ({})
        };
        const formBuilderStub = {
            group: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ SearchComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: RedditService, useValue: redditServiceStub },
                { provide: FormBuilder, useValue: formBuilderStub }
            ]
        });
        fixture = TestBed.createComponent(SearchComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

 

 

  

});
