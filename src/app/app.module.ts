import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import { StoreModule } from '@ngrx/store';
import { APP_REDUCER } from './core/store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffect } from './core/store/user/user.effects';
import { FormsModule } from '@angular/forms';
import { ErrorDialog } from './core/dialogs/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserComponent } from './user/user.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
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
    MatButtonModule,
    StoreModule.forRoot(APP_REDUCER),
    EffectsModule.forRoot([UsersEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
