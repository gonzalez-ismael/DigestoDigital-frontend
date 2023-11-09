import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PalabraClaveService {

  private url_palabra_clave = "http://localhost:8080/palabra-clave";

  constructor(private http: HttpClient) { }

  public getPalabrasClave(): Observable<any> {
    const url = "Http://localhost:8080/palabras-claves" + "/traer";
    return this.http.get(url);
  }

  public savePalabraClave(palabraClave: any): Observable<any> {
    const url = this.url_palabra_clave + "/crear";
    return this.http.post(url, palabraClave);
  }

  public deletePalabraClave(id: number): Observable<any> {
    const url = this.url_palabra_clave + "/eliminar/" + id;
    return this.http.delete(url);
  }

  public editPalabraClave(id: number, palabraClave: any): Observable<any> {
    const url = this.url_palabra_clave + "/modificar/" + id;
    return this.http.put(url, palabraClave);
  }

}
