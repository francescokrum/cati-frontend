import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-botao-perfil',
  templateUrl: './botao-perfil.component.html',
  styleUrl: './botao-perfil.component.css'
})
export class BotaoPerfilComponent {

  cliente: Cliente = new Cliente();

  constructor(private clienteService: ClienteService){}

  ngOnInit(): void{
    this.clienteService.buscarClientePorId().subscribe(
      (data: Cliente) => {
        this.cliente = data;
      },
      (error) => {
        console.error('Erro ao buscar cliente', error);
      }
    )
  }

}
