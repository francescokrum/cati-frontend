import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-form-editar-cliente',
  templateUrl: './form-editar-cliente.component.html',
  styleUrl: './form-editar-cliente.component.css'
})
export class FormEditarClienteComponent {

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

  editarCliente(): void{

    this.clienteService.editarCliente(this.cliente).subscribe({
      next: mensagem => {
        console.log('Usuario editado com sucesso!', mensagem);
      },
      error: (error: any) => {
        alert('Erro ao editar seus dados');
        console.error('Erro ao editar cliente:', error);
      }
    })


  }
}
