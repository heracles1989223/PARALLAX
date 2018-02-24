import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TabsModule } from 'ngx-bootstrap';
import { MnFullpageModule } from "ngx-fullpage";

import { AppComponent } from './app.component';
import { SigninUpComponent } from './signin-up/signin-up.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninUpComponent,
    CoursesComponent,
    HomeComponent
     
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,   
    FormsModule,
    HttpModule,    
    TabsModule.forRoot(),
    MnFullpageModule.forRoot()
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
