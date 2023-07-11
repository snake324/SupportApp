import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './global/footer/footer.component';
import { SupportRequestFormComponent } from './characters/views/support-request-form/support-request-form.component';
import { SupportFormComponent } from './characters/components/support-form/support-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SupportRequestFormComponent,
    SupportFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
