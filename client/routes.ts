import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//Add your components here
import { ApplicationComponent } from 
  './views/application/application.component';
import { AppComponent } from 
  './index';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'application', component: ApplicationComponent },
    ])
  ],
  declarations: [
    ApplicationComponent, 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
