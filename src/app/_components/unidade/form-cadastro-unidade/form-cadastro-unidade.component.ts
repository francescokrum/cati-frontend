import { Component, inject } from '@angular/core';
import { Unidade } from '../../../models/unidade';
import { UnidadeService } from '../../../services/unidade.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cadastro-unidade',
  templateUrl: './form-cadastro-unidade.component.html',
  styleUrl: './form-cadastro-unidade.component.css'
})
export class FormCadastroUnidadeComponent {

  unidade = new Unidade();

  constructor(){}

  unidadeService = inject(UnidadeService);

  cadastrarUnidade(unidade: Unidade){
    this.unidadeService.cadastrarUnidade(unidade).subscribe({
      next: mensagem => {
        Swal.fire({
          icon: "success",
          title: "Unidade de negócio cadastrada!"
        });
        this.unidade = new Unidade();
      },
      error: (error: any) => {
        Swal.fire({
          icon: "error",
          title: "Dados inválidos ao cadastrar Unidade de negócio!"
        });
      }
    });
  }

}
