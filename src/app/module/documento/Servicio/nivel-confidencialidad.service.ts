import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NivelConfidencialidadService {
  private url_nivel_conformidad = "http://localhost:8080/nivel-confidencialidad";

  constructor(private http: HttpClient) { }

  public getNivelesConfidencialidad(): Observable<any> {
    const url = "Http://localhost:8080/niveles-confidencialidad" + "/traer";
    return this.http.get(url);
  }

  public saveNivelConfidencialidad(nivelConformidad: any): Observable<any> {
    const url = this.url_nivel_conformidad + "/crear";
    return this.http.post(url, nivelConformidad);
  }

  public deleteNivelConfidencialidad(id: number): Observable<any> {
    const url = this.url_nivel_conformidad + "/eliminar/" + id;
    return this.http.delete(url);
  }

  public editNivelConfidencialidad(id: number, nivelConformidad: any): Observable<any> {
    const url = this.url_nivel_conformidad + "/modificar/" + id;
    return this.http.put(url, nivelConformidad);
  }

}
