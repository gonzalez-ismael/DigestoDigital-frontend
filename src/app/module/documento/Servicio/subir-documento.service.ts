import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  private url_archivo = "http://localhost:8080/archivo";

  constructor(private http: HttpClient) { }

  public getArchivos(): Observable<any> {
    const url = this.url_archivo + "s/traer";
    return this.http.get(url);
  }

  public saveArchivo(archivo: any): Observable<any> {
    const url = this.url_archivo + "/crear";
    return this.http.post(url, archivo);
  }

  public deleteArchivo(id: number): Observable<any> {
    const url = this.url_archivo + "/eliminar/" + id;
    return this.http.delete(url);
  }

  public editArchivo(id: number, archivo: any): Observable<any> {
    const url = this.url_archivo + "/modificar/" + id;
    return this.http.put(url, archivo);
  }
}
