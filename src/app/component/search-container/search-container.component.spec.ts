import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchContainerComponent } from './search-container.component';

describe('SearchContainerComponent', () => {
    let comp: SearchContainerComponent;
    let fixture: ComponentFixture<SearchContainerComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchContainerComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(SearchContainerComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
