import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FortschrittComponent } from './fortschritt.component';

let component: FortschrittComponent;
let fixture: ComponentFixture<FortschrittComponent>;

describe('fortschritt component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FortschrittComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FortschrittComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});