import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Desenvolvedor } from "../models/desenvolvedor";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DesenvolvedorService{

  private _httpClient: HttpClient

  private url = environment.api;

    constructor(httpClient: HttpClient){
      this._httpClient = httpClient
    }


    cadastrarDesenvolvedor(desenvolvedor: Desenvolvedor): Observable<Desenvolvedor>{
      return this._httpClient.post<Desenvolvedor>(this.url + '/desenvolvedor/cadastrarDesenvolvedor', desenvolvedor)
    }

    buscarDesenvolvedores(): Observable<Desenvolvedor[]>{
      return this._httpClient.get<Desenvolvedor[]>(this.url + '/desenvolvedor')
    }

    removerDev(id: number): Observable<string>{
      return this._httpClient.delete<string>(this.url + '/desenvolvedor/'+id, { responseType: 'text' as 'json' })
    }

    editarDesenvolvedor(desenvolvedor: Desenvolvedor): Observable<Desenvolvedor>{
      return this._httpClient.put<Desenvolvedor>(this.url + '/desenvolvedor/editarDesenvolvedor', desenvolvedor)
    }


}
