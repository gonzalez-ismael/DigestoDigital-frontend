import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReparticionService {

  private url_reparticion = "http://localhost:8080/reparticion";

  constructor(private http: HttpClient) { }

  public getReparticiones(): Observable<any> {
    const url = this.url_reparticion + "es/traer";
    return this.http.get(url);
  }

  public saveReparticion(reparticion: any): Observable<any> {
    const url = this.url_reparticion + "/crear"
    return this.http.post(url, reparticion);
  }

  public deleteReparticion(id: number): Observable<any> {
    const url = this.url_reparticion + "/eliminar/" + id;
    return this.http.delete(url);
  }

  public editReparticion(id: number, reparticion: any): Observable<any> {
    const url = this.url_reparticion + "/modificar/" + id
    return this.http.put(url, reparticion);
  }
}
