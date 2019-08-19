import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Add your components here
import { AppComponent } from
  './app.component';
import { ApplicationComponent } from 
  './views/application/application.component';
import { IndexComponent } from
  './index_content';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'application', component: ApplicationComponent },
      { path: '',  component: IndexComponent},
    ])
  ],
  declarations: [
    AppComponent,
    ApplicationComponent, 
    IndexComponent, 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
