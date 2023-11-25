import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaracterizarComponent } from './Componente/caracterizar/caracterizar.component';
import { VigenciaComponent } from './Componente/vigencia/vigencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NivelConfidencialidadComponent } from './Componente/nivel-confidencialidad/nivel-confidencialidad.component';
import { PalabraClaveComponent } from './Componente/palabra-clave/palabra-clave.component';
import { ReparticionComponent } from './Componente/reparticion/reparticion.component';
import { DestinatarioComponent } from './Componente/destinatario/destinatario.component';
import { SubirDocumentoComponent } from './Componente/subir-documento/subir-documento.component';

@NgModule({
  declarations: [
    CaracterizarComponent,
    VigenciaComponent,
    NivelConfidencialidadComponent,
    PalabraClaveComponent,
    ReparticionComponent,
    DestinatarioComponent,
    SubirDocumentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CaracterizarComponent,
    SubirDocumentoComponent
  ]
})
export class DocumentoModule { }
