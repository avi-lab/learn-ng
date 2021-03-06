import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDialog } from './error-dialog.component';

describe('ErrorDialog', () => {
    let component: ErrorDialog;
    let fixture: ComponentFixture<ErrorDialog>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ErrorDialog]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorDialog);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
