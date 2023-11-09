import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinatarioService {
  private url_destinatario = "http://localhost:8080/destinatario";

  constructor(private http: HttpClient) { }

  public getDestinatarios(): Observable<any> {
    const url = this.url_destinatario + "s/traer";
    return this.http.get(url);
  }

  public saveDestinatario(destinatario: any): Observable<any> {
    const url = this.url_destinatario + "/crear";
    return this.http.post(url, destinatario);
  }

  public deleteDestinatario(id: number): Observable<any> {
    const url = this.url_destinatario + "/eliminar/" + id;
    return this.http.delete(url);
  }

  public editDestinatario(id: number, destinatario: any): Observable<any> {
    const url = this.url_destinatario + "/modificar/" + id;
    return this.http.put(url, destinatario);
  }

}
