import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { DocumentoModule } from './module/documento/documento.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DocumentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
