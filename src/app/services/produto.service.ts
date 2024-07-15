import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private _httpClient: HttpClient

  private url = environment.api;

    constructor(httpClient: HttpClient){
      this._httpClient = httpClient
    }

  cadastrarProduto(produto: Produto): Observable<Produto>{
    return this._httpClient.post<Produto>(this.url + '/produto/cadastrarProduto', produto)
  }

  buscarProdutos(): Observable<Produto[]>{
    return this._httpClient.get<Produto[]>(this.url + '/produto')
  }

  buscarProdutosPorCliente(): Observable<Produto[]>{
    return this._httpClient.get<Produto[]>(this.url + '/produto/buscarProdutosPorCliente')
  }

  removerProduto(id: number): Observable<string>{
    return this._httpClient.delete<string>(this.url + '/produto/' + id, { responseType: 'text' as 'json' })
  }


}
