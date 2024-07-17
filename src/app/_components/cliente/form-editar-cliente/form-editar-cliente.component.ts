import { Component } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';
import { ClienteDTOSenha } from '../../../models/clienteDTOSenha';
import Swal from 'sweetalert2';

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


  editarCliente(cliente: Cliente): void{

    this.clienteService.editarCliente(cliente).subscribe({
      next: mensagem => {
        Swal.fire({
          icon: "success",
          title: "Usuário editado!"
        });
      },
      error: (error: any) => {
        Swal.fire({
          icon: "error",
          title: "Erro ao editar usuário!"
        });
      }
    })
  }
}
