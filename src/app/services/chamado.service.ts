import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Chamado } from '../models/chamado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  private _httpClient: HttpClient

  private url = environment.api;

    constructor(httpClient: HttpClient){
      this._httpClient = httpClient
    }

    cadastrarChamado(chamado: Chamado): Observable<Chamado>{
      return this._httpClient.post<Chamado>(this.url + '/chamado/cadastrarChamado', chamado)
    }

    buscarChamadoPorCliente(): Observable<Chamado[]>{
      return this._httpClient.get<Chamado[]>(this.url + '/chamado/buscarChamadoPorCliente')
    }

    buscarChamados(): Observable<Chamado[]>{
      return this._httpClient.get<Chamado[]>(this.url + '/chamado')
    }

    removerChamado(id: number): Observable<string>{
      return this._httpClient.delete<string>(this.url + '/chamado/' + id, { responseType: 'text' as 'json' })
    }

}
