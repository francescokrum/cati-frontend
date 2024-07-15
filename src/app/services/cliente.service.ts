import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private _httpClient: HttpClient

  private url = environment.api;

    constructor(httpClient: HttpClient){
      this._httpClient = httpClient
    }

    cadastrarCliente(cliente: Cliente): Observable<Cliente>{
      return this._httpClient.post<Cliente>(this.url + '/cliente/cadastrarCliente', cliente)
    }

    buscarClientes(): Observable<Cliente[]>{
      return this._httpClient.get<Cliente[]>(this.url + '/cliente/clientes')
    }

    buscarClientePorId(): Observable<Cliente>{
      return this._httpClient.get<Cliente>(this.url + '/cliente')
    }

    removerCliente(id: number): Observable<string>{
      return this._httpClient.delete<string>(this.url + "/cliente/" + id, { responseType: 'text' as 'json' })
    }

    editarCliente(cliente: Cliente): Observable<Cliente>{
      return this._httpClient.put<Cliente>(this.url + "/cliente/editarCliente", cliente)
    }

}
