import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NivelConfidencialidadService } from '../../Servicio/nivel-confidencialidad.service';

@Component({
  selector: 'app-nivel-confidencialidad',
  templateUrl: './nivel-confidencialidad.component.html',
  styleUrls: ['./nivel-confidencialidad.component.css']
})

export class NivelConfidencialidadComponent implements OnInit {
  @ViewChild('nivelConfidencialidadInput') nivelConfidencialidadInput: ElementRef | undefined;
  nivelConfidencialidadList: any[] = [];
  nivelConfidencialidadForm: FormGroup;

  constructor(private service: NivelConfidencialidadService, private formBuilder: FormBuilder) {
    this.nivelConfidencialidadForm = this.formBuilder.group({
      nuevaNivelConfidencialidad: ['', [Validators.required]],
    });

  }

  public ngOnInit() {
    // Usa los métodos del servicio para obtener o manipular datos
    this.listarNivelesConfidencialidad();
  }

  public listarNivelesConfidencialidad() {
    this.service.getNivelesConfidencialidad().subscribe((data: any) => {
      this.nivelConfidencialidadList = [];
      this.nivelConfidencialidadList = data;
    });
  }

  public agregarNivelConfidencialidad() {
    const nuevaNivelConfidencialidadControl = this.nivelConfidencialidadForm.get('nuevaNivelConfidencialidad');
    if (nuevaNivelConfidencialidadControl) {
      const nuevaNivelConfidencialidad = nuevaNivelConfidencialidadControl.value;
      if (nuevaNivelConfidencialidad) {
        const nuevaNivelConfidencialidadObj = { nivelConfidencialidad: nuevaNivelConfidencialidad };
        this.service.saveNivelConfidencialidad(nuevaNivelConfidencialidadObj).subscribe(() => {
          nuevaNivelConfidencialidadControl.reset();
          this.listarNivelesConfidencialidad();
        });
      }
    }
  }

  public eliminarNivelConfidencialidad(id: number) {
    this.service.deleteNivelConfidencialidad(id).subscribe(() => {
      this.listarNivelesConfidencialidad(); // Actualiza la lista después de eliminar
    });
  }

  public actualizarNivelConfidencialidad(id: number) {
    if (this.nivelConfidencialidadInput) {
      const nuevoValor = this.nivelConfidencialidadInput.nativeElement.value;
      if (nuevoValor !== "") {
        const nivelConfidencialidadActualizada = { nivelConfidencialidad: nuevoValor };
        this.service.editNivelConfidencialidad(id, nivelConfidencialidadActualizada).subscribe(() => {
          this.listarNivelesConfidencialidad();
        });
      }
    }
  }

  public cancelarNivelConfidencialidad(nivelConfidencialidad: any) {
    nivelConfidencialidad.editable = false;
  }
}