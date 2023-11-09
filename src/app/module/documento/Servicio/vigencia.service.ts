import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VigenciaService {

  private url_vigencia = "http://localhost:8080/vigencia";

  constructor(private http: HttpClient) { }

  public getVigencias(): Observable<any> {
    const url = this.url_vigencia + "s/traer";
    return this.http.get(url);
  }

  public saveVigencia(vigencia: any): Observable<any> {
    const url = this.url_vigencia + "/crear"
    return this.http.post(url, vigencia);
  }

  public deleteVigencia(id: number): Observable<any> {
    const url = this.url_vigencia + "/eliminar/" + id;
    return this.http.delete(url);
  }

  public editVigencia(id: number, vigencia: any): Observable<any> {
    const url = this.url_vigencia + "/modificar/" + id
    return this.http.put(url, vigencia);
  }
}
