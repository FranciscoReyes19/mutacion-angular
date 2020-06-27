import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { AngularFileUploaderModule } from "angular-file-uploader";


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent } from './components/error/error.component';

import { UserService } from './services/user.service';
import {IdentityGuard} from './services/identity.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    AngularFileUploaderModule
  ],
  providers: [
    appRoutingProviders,
    IdentityGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
