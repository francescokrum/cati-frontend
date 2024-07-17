import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Unidade } from "../models/unidade";
import { Observable } from 'rxjs';
import { Desenvolvedor } from '../models/desenvolvedor';


@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  private _httpClient: HttpClient

  private url = environment.api;

    constructor(httpClient: HttpClient){
      this._httpClient = httpClient
    }


    cadastrarUnidade(unidade: Unidade): Observable<Unidade>{
      return this._httpClient.post<Unidade>(this.url + '/unidadeDeNegocio/cadastrarUnidadeDeNegocio', unidade)
    }

    buscarUnidades(): Observable<Unidade[]>{
      return this._httpClient.get<Unidade[]>(this.url + '/unidadeDeNegocio')
    }

    buscarUnidadePorId(id: number): Observable<Unidade>{
      return this._httpClient.get<Unidade>(this.url + '/unidadeDeNegocio/' + id)
    }

    editarUnidade(unidade: Unidade): Observable<Unidade>{
      return this._httpClient.put<Unidade>(this.url + '/unidadeDeNegocio/editarUnidadeDeNegocio', unidade)
    }

    removerUnidade(id: number): Observable<string>{
      return this._httpClient.delete<string>(this.url + '/unidadeDeNegocio/' + id, { responseType: 'text' as 'json' })
    }


}
