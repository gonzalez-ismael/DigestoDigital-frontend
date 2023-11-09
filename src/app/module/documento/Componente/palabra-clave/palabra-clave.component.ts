import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PalabraClaveService } from '../../Servicio/palabra-clave.service';

@Component({
  selector: 'app-palabra-clave',
  templateUrl: './palabra-clave.component.html',
  styleUrls: ['./palabra-clave.component.css']
})

export class PalabraClaveComponent implements OnInit {
  @ViewChild('palabraClaveInput') palabraClaveInput: ElementRef | undefined;
  palabraClaveList: any[] = [];
  palabraClaveForm: FormGroup;

  constructor(private service: PalabraClaveService, private formBuilder: FormBuilder) {
    this.palabraClaveForm = this.formBuilder.group({
      nuevaPalabraClave: ['', [Validators.required]],
    });
  }

  public ngOnInit() {
    // Usa los métodos del servicio para obtener o manipular datos
    this.listarPalabrasClave();
  }

  public listarPalabrasClave() {
    this.service.getPalabrasClave().subscribe((data: any) => {
      this.palabraClaveList = [];
      this.palabraClaveList = data;
    });
  }

  public agregarPalabraClave() {
    const nuevaPalabraClaveControl = this.palabraClaveForm.get('nuevaPalabraClave');
    if (nuevaPalabraClaveControl) {
      const nuevaPalabraClave = nuevaPalabraClaveControl.value;
      if (nuevaPalabraClave) {
        const nuevaPalabraClaveObj = { palabraClave: nuevaPalabraClave };
        this.service.savePalabraClave(nuevaPalabraClaveObj).subscribe(() => {
          nuevaPalabraClaveControl.reset();
          this.listarPalabrasClave();
        });
      }
    }
  }

  public eliminarPalabraClave(id: number) {
    this.service.deletePalabraClave(id).subscribe(() => {
      this.listarPalabrasClave(); // Actualiza la lista después de eliminar
    });
  }

  public actualizarPalabraClave(id: number) {
    if (this.palabraClaveInput) {
      const nuevoValor = this.palabraClaveInput.nativeElement.value;
      if (nuevoValor !== "") {
        const palabraClaveActualizada = { palabraClave: nuevoValor };
        this.service.editPalabraClave(id, palabraClaveActualizada).subscribe(() => {
          this.listarPalabrasClave();
        });
      }
    }
  }

  public cancelarPalabraClave(palabraClave: any) {
    palabraClave.editable = false;
  }

}