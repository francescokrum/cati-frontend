import { Component } from '@angular/core';
import { Usuario } from '../../../models/usuario';
import { UsuarioServiceService } from '../../../services/usuario-service.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrl: './lista-usuarios.component.css'
})
export class ListaUsuariosComponent {

  lista: Usuario[] = [];

  constructor(private usuarioService: UsuarioServiceService){}

  ngOnInit(): void {
    this.buscarTodosUsuarios();
  }

  buscarTodosUsuarios(): void{
    this.usuarioService.buscarTodosUsuarios().subscribe({
      next: (lista: Usuario[]) => {
        this.lista = lista;
      },
      error: (error: any) => {
        alert('Erro ao buscar usuarios');
        console.error('Erro ao buscar usuarios:', error);
      }
    })
  }


}
