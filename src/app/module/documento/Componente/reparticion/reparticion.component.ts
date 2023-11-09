import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReparticionService } from '../../Servicio/reparticion.service';

@Component({
  selector: 'app-reparticion',
  templateUrl: './reparticion.component.html',
  styleUrls: ['./reparticion.component.css']
})

export class ReparticionComponent implements OnInit {
  @ViewChild('reparticionInput') reparticionInput: ElementRef | undefined;
  reparticionList: any[] = [];
  reparticionForm: FormGroup;

  constructor(private service: ReparticionService, private formBuilder: FormBuilder) {
    this.reparticionForm = this.formBuilder.group({
      nuevaReparticion: ['', [Validators.required]],
    });
  }

  public ngOnInit() {
    // Usa los métodos del servicio para obtener o manipular datos
    this.listarReparticiones();
  }

  public listarReparticiones() {
    this.service.getReparticiones().subscribe((data: any) => {
      this.reparticionList = [];
      this.reparticionList = data;
    });
  }

  public agregarReparticion() {
    const nuevaReparticionControl = this.reparticionForm.get('nuevaReparticion');
    if (nuevaReparticionControl) {
      const nuevaReparticion = nuevaReparticionControl.value;
      if (nuevaReparticion) {
        const nuevaReparticionObj = { reparticion: nuevaReparticion };
        this.service.saveReparticion(nuevaReparticionObj).subscribe(() => {
          nuevaReparticionControl.reset();
          this.listarReparticiones();
        });
      }
    }
  }

  public eliminarReparticion(id: number) {
    this.service.deleteReparticion(id).subscribe(() => {
      this.listarReparticiones(); // Actualiza la lista después de eliminar
    });
  }

  public actualizarReparticion(id: number) {
    if (this.reparticionInput) {
      const nuevoValor = this.reparticionInput.nativeElement.value;
      if (nuevoValor !== "") {
        const reparticionActualizada = { reparticion: nuevoValor };
        this.service.editReparticion(id, reparticionActualizada).subscribe(() => {
          this.listarReparticiones();
        });
      }
    }
  }

  public cancelarReparticion(reparticion: any) {
    reparticion.editable = false;
  }

}