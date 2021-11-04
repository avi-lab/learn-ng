import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import { StoreModule } from '@ngrx/store';
import { APP_REDUCER } from './core/store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffect } from './core/store/users/user.effects';
import { FormsModule } from '@angular/forms';
import { ErrorDialog } from './core/dialogs/error-dialog/error-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    UsersDetailsComponent,
    ErrorDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    StoreModule.forRoot(APP_REDUCER),
    EffectsModule.forRoot([UsersEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
