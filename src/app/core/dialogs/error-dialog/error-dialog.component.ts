import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorResponse } from '../../store/store.model';

@Component({
    template: `
        <h1 mat-dialog-title>Error Dialog</h1>
        <div mat-dialog-content><h2>{{ errorResponse.code }}:</h2> {{ errorResponse.message }}</div>
        <div mat-dialog-actions>
            <button mat-button mat-dialog-close>Close</button>
        </div>
    `,
    styles: [
    ]
})

export class ErrorDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public errorResponse: ErrorResponse) { }
}