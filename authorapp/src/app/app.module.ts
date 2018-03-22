import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';

import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
 

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    NewComponent,
    EditComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
