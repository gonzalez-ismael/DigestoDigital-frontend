import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DestinatarioService } from '../../Servicio/destinatario.service';

@Component({
  selector: 'app-destinatario',
  templateUrl: './destinatario.component.html',
  styleUrls: ['./destinatario.component.css']
})
export class DestinatarioComponent implements OnInit {
  @ViewChild('destinatarioInput') destinatarioInput: ElementRef | undefined;
  destinatarioList: any[] = [];
  destinatarioForm: FormGroup;

  constructor(private service: DestinatarioService, private formBuilder: FormBuilder) {
    this.destinatarioForm = this.formBuilder.group({
      nuevaDestinatario: ['', [Validators.required]],
    });
  }

  public ngOnInit() {
    // Usa los métodos del servicio para obtener o manipular datos
    this.listarDestinatarios();
  }

  public listarDestinatarios() {
    this.service.getDestinatarios().subscribe((data: any) => {
      this.destinatarioList = [];
      this.destinatarioList = data;
    });
  }

  public agregarDestinatario() {
    const nuevaDestinatarioControl = this.destinatarioForm.get('nuevaDestinatario');
    if (nuevaDestinatarioControl) {
      const nuevaDestinatario = nuevaDestinatarioControl.value;
      if (nuevaDestinatario) {
        const nuevaDestinatarioObj = { destinatario: nuevaDestinatario };
        this.service.saveDestinatario(nuevaDestinatarioObj).subscribe(() => {
          nuevaDestinatarioControl.reset();
          this.listarDestinatarios();
        });
      }
    }
  }

  public eliminarDestinatario(id: number) {
    this.service.deleteDestinatario(id).subscribe(() => {
      this.listarDestinatarios(); // Actualiza la lista después de eliminar
    });
  }

  public actualizarDestinatario(id: number) {
    if (this.destinatarioInput) {
      const nuevoValor = this.destinatarioInput.nativeElement.value;
      if (nuevoValor !== "") {
        const destinatarioActualizado = { destinatario: nuevoValor };
        this.service.editDestinatario(id, destinatarioActualizado).subscribe(() => {
          this.listarDestinatarios();
        });
      }
    }
  }

  public cancelarDestinatario(destinatario: any) {
    destinatario.editable = false;
  }

}