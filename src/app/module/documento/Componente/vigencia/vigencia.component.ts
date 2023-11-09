import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VigenciaService } from '../../Servicio/vigencia.service';

@Component({
  selector: 'app-vigencia',
  templateUrl: './vigencia.component.html',
  styleUrls: ['./vigencia.component.css']
})

export class VigenciaComponent implements OnInit {
  @ViewChild('vigenciaInput') vigenciaInput: ElementRef | undefined;
  vigenciaList: any[] = [];
  vigenciaForm: FormGroup;

  constructor(private service: VigenciaService, private formBuilder: FormBuilder) {
    this.vigenciaForm = this.formBuilder.group({
      nuevaVigencia: ['', [Validators.required]],
    });
  }

  public ngOnInit() {
    // Usa los métodos del servicio para obtener o manipular datos
    this.listarVigencias();
  }

  public listarVigencias() {
    this.service.getVigencias().subscribe((data: any) => {
      this.vigenciaList = [];
      this.vigenciaList = data;
    });
  }

  public agregarVigencia() {
    const nuevaVigenciaControl = this.vigenciaForm.get('nuevaVigencia');
    if (nuevaVigenciaControl) {
      const nuevaVigencia = nuevaVigenciaControl.value;
      if (nuevaVigencia) {
        const nuevaVigenciaObj = { vigencia: nuevaVigencia };
        this.service.saveVigencia(nuevaVigenciaObj).subscribe(() => {
          nuevaVigenciaControl.reset();
          this.listarVigencias();
        });
      }
    }
  }

  public eliminarVigencia(id: number) {
    this.service.deleteVigencia(id).subscribe(() => {
      this.listarVigencias(); // Actualiza la lista después de eliminar
    });
  }

  public actualizarVigencia(id: number) {
    if (this.vigenciaInput) {
      const nuevoValor = this.vigenciaInput.nativeElement.value;
      if (nuevoValor !== "") {
        const vigenciaActualizada = { vigencia: nuevoValor };
        this.service.editVigencia(id, vigenciaActualizada).subscribe(() => {
          this.listarVigencias();
        });
      }
    }
  }

  public cancelarVigencia(vigencia: any){
    vigencia.editable = false;
  }

}