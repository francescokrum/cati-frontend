import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importe NgForm para utilizar no método onSubmit
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-form-cadastro-cliente',
  templateUrl: './form-cadastro-cliente.component.html',
  styleUrls: ['./form-cadastro-cliente.component.css']
})
export class FormCadastroClienteComponent {

  cliente = new Cliente();

  constructor(private clienteService: ClienteService) {}

  cadastrarCliente(cliente: Cliente): void {
    this.clienteService.cadastrarCliente(cliente).subscribe({
      next: mensagem => {
        alert('Cadastro efetuado com sucesso!');
      },
      error: (error: any) => {
        alert('Erro ao cadastrar cliente');
        console.error('Erro ao cadastrar cliente:', error);
      }
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.cadastrarCliente(this.cliente);
      form.resetForm(); // Limpa o formulário
    }
  }
}
