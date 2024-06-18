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


    buscarUnidades(): Observable<Unidade[]>{
      return this._httpClient.get<Unidade[]>(this.url + '/unidadeDeNegocio')
    }

    removerUnidade(id: number): Observable<string>{
      return this._httpClient.delete<string>(this.url + '/unidadeDeNegocio/'+id, { responseType: 'text' as 'json' })
    }


}
