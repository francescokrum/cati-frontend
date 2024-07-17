import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Chamado } from '../models/chamado';
import { Observable } from 'rxjs';
import { ChamadoDTO } from '../models/chamadoDTO';

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
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this._httpClient.post<Chamado>(this.url + '/chamado/cadastrarChamado', chamado, { headers })
    }

    buscarChamadoPorCliente(): Observable<Chamado[]>{
      return this._httpClient.get<Chamado[]>(this.url + '/chamado/buscarChamadoPorCliente')
    }

    buscarChamados(): Observable<Chamado[]>{
      return this._httpClient.get<Chamado[]>(this.url + '/chamado')
    }

    editarChamado(chamadoDTO: ChamadoDTO): Observable<ChamadoDTO>{
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this._httpClient.put<ChamadoDTO>(this.url + '/chamado/editarChamado', chamadoDTO, { headers });

    }

    removerChamado(id: number): Observable<string>{
      return this._httpClient.delete<string>(this.url + '/chamado/' + id, { responseType: 'text' as 'json' })
    }

}
