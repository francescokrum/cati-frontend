import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private _httpClient: HttpClient

  private url = environment.api;

    constructor(httpClient: HttpClient){
      this._httpClient = httpClient
    }

    cadastrarTarefa(tarefa: Tarefa): Observable<Tarefa>{
      return this._httpClient.post<Tarefa>(this.url + '/tarefa/cadastrarTarefa', tarefa)
    }

    buscarTarefaPorDev(): Observable<Tarefa[]>{
      return this._httpClient.get<Tarefa[]>(this.url + '/tarefa/buscarTarefaPorDev')
    }

    buscarTarefas(): Observable<Tarefa[]>{
      return this._httpClient.get<Tarefa[]>(this.url + '/tarefa')
    }

    editarTarefa(tarefa: Tarefa): Observable<Tarefa>{
      return this._httpClient.put<Tarefa>(this.url + '/tarefa/editarTarefa', tarefa)
    }

    removerTarefa(id: number): Observable<string>{
      return this._httpClient.delete<string>(this.url + "/tarefa/" + id, { responseType: 'text' as 'json' })
    }
}
