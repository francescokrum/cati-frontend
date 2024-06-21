import { Component, inject } from '@angular/core';
import { Unidade } from '../../../models/unidade';
import { UnidadeService } from '../../../services/unidade.service';

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
      },
      error: (error: any) => {
        alert('Erro ao buscar desenvolvedores');
        console.error('Erro ao buscar desenvolvedores:', error);
      }
    });
  }

}
