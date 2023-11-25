import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VigenciaService } from '../../Servicio/vigencia.service';
import { ReparticionService } from '../../Servicio/reparticion.service';
import { NivelConfidencialidadService } from '../../Servicio/nivel-confidencialidad.service';
import { PalabraClaveService } from '../../Servicio/palabra-clave.service';
import { DestinatarioService } from '../../Servicio/destinatario.service';
import { ArchivoService } from '../../Servicio/subir-documento.service';

@Component({
  selector: 'app-subir-documento',
  templateUrl: './subir-documento.component.html',
  styleUrls: ['./subir-documento.component.css']
})
export class SubirDocumentoComponent implements OnInit {
  formulario: any;
  reparticiones: any[] = [];
  vigencias: any[] = [];
  nivelesConfidencialidad: any[] = [];
  palabrasClaveForm: FormGroup;
  palabrasClave: any[] = [];
  destinatariosForm: FormGroup;
  destinatarios: any[] = [];

  constructor(private vigenciaService: VigenciaService,
    private reparticionService: ReparticionService,
    private nivelConfidencialidadService: NivelConfidencialidadService,
    private palabraClaveService: PalabraClaveService,
    private destinatarioService: DestinatarioService,
    private archivoService: ArchivoService,
    private fb: FormBuilder) {
    this.palabrasClaveForm = this.fb.group({
      selectedPalabrasClave: this.fb.array([], Validators.required)
    });
    this.destinatariosForm = this.fb.group({
      selectedDestinatarios: this.fb.array([], Validators.required)
    });
    this.formulario = this.fb.group({
      id2: ['', Validators.required],
      titulo: ['', Validators.required],
      fecha_emision: ['', Validators.required],
      fecha_publicacion: [''],
      descripcion: ['', Validators.required],
      taxonomia: ['', Validators.required],
      url: ['', Validators.required],
      reparticion: ['', Validators.required],
      vigencia: ['', Validators.required],
      nivelConfidencialidad: ['', Validators.required],
      palabrasClave: this.fb.array([], Validators.required),
      destinatarios: this.fb.array([], Validators.required),
    });
  }

  public ngOnInit() {
    console.clear();
    this.reparticionService.getReparticiones().subscribe(
      (data) => {
        this.reparticiones = data;
      },
      (error) => {
        console.error('Error al obtener las reparticiones', error);
      }
    );
    this.vigenciaService.getVigencias().subscribe(
      (data) => {
        this.vigencias = data;
      },
      (error) => {
        console.error('Error al obtener las vigencias', error);
      }
    );
    this.nivelConfidencialidadService.getNivelesConfidencialidad().subscribe(
      (data) => {
        this.nivelesConfidencialidad = data;
      },
      (error) => {
        console.error('Error al obtener los niveles de confidencialidad', error);
      }
    );
    this.palabraClaveService.getPalabrasClave().subscribe(
      (data) => {
        this.palabrasClave = data;
      },
      (error) => {
        console.error('Error al obtener las palabras clave', error);
      }
    );
    this.destinatarioService.getDestinatarios().subscribe(
      (data) => {
        this.destinatarios = data;
      },
      (error) => {
        console.error('Error al obtener los destinatarios', error);
      }
    );
  }

  onPalabrasClaveCheckboxChange(event: any) {
    const formArray: FormArray = this.formulario.get('palabrasClave') as FormArray;

    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      const index = formArray.controls.findIndex(x => x.value.id === event.target.value);
      formArray.removeAt(index);
    }
  }
  onDestinatariosCheckboxChange(event: any) {
    const destinatariosArray = this.formulario.get('destinatarios') as FormArray;
  
    if (event.target.checked) {
      destinatariosArray.push(new FormControl(event.target.value));
    } else {
      const index = destinatariosArray.value.findIndex((id: any) => id === event.target.value);
      destinatariosArray.removeAt(index);
    }
  }

  onSubmit() {
    const datosFormulario = this.obtenerDatos();

    console.log("FORMULARIO: ", this.formulario.value);

    this.archivoService.saveArchivo(datosFormulario).subscribe(
      (respuesta) => {
        console.log('Archivo guardado exitosamente', respuesta);
      },
      (error) => {
        console.error('Error al guardar el archivo', error);

        // Agrega este bloque para imprimir el detalle del error en la consola
        if (error.error instanceof ErrorEvent) {
          console.error('Error del cliente:', error.error.message);
        } else {
          console.error('Error del servidor:', error);
        }
      }
    );
  }

  getFechaActual(): string {
    const tiempoTranscurrido = Date.now();
    const hoy = new Date(tiempoTranscurrido);

    const anio = hoy.getFullYear();
    const mes = ('0' + (hoy.getMonth() + 1)).slice(-2); // Sumar 1 porque los meses van de 0 a 11
    const dia = ('0' + hoy.getDate()).slice(-2);

    const fechaFormateada = `${anio}-${mes}-${dia}`;

    return fechaFormateada;
  }

  private obtenerDatos(): any {
    const datosFormulario = this.formulario.value;
    this.formulario.get('fecha_publicacion').setValue(this.getFechaActual());
    return datosFormulario;
  }
}