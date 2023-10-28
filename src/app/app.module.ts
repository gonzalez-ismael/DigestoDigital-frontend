import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CaracterizarDocumentoComponent } from './components/caracterizar-documento/caracterizar-documento.component';

@NgModule({
  declarations: [
    AppComponent,
    CaracterizarDocumentoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
