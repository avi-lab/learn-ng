import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { ErrorDialog } from './core/dialogs/error-dialog/error-dialog.component';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { APP_REDUCER } from './core/store/app.state';
import { UsersEffect } from './core/store/user/user.effects';

import { MaterialModule } from './material.module';
import { UserAddComponent } from './user/user-add/user-add.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserDetailsComponent,
    ErrorDialog,
    UserAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot(APP_REDUCER),
    EffectsModule.forRoot([UsersEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
