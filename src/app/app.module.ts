import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailService } from './mail.service';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ZoomComponent } from './zoom/zoom.component'

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{ provide: 'mail', useClass: MailService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
