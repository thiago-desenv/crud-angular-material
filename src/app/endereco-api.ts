import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado, Municipio } from './endereco-api.models';

@Injectable({
  providedIn: 'root'
})
export class EnderecoApi {
  private baseUrl: string = 'https://brasilapi.com.br/api/';

  constructor(private http: HttpClient) { }

  getUfs(): Observable<Estado[]> {
    const path = 'ibge/uf/v1';
    return this.http.get<Estado[]>(this.baseUrl + path);
  }

  getMunicipio(uf: string): Observable<Municipio[]> {
    const path = 'ibge/municipios/v1/' + uf;
    return this.http.get<Municipio[]>(this.baseUrl + path);
  }
}
