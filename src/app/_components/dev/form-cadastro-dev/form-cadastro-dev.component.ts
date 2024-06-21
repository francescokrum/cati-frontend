import { Component, inject } from '@angular/core';
import { DesenvolvedorService } from '../../../services/desenvolvedor.service';
import { Desenvolvedor } from '../../../models/desenvolvedor';

@Component({
  selector: 'app-form-cadastro-dev',
  templateUrl: './form-cadastro-dev.component.html',
  styleUrl: './form-cadastro-dev.component.css'
})
export class FormCadastroDevComponent {

desenvolvedor = new Desenvolvedor()

  constructor(){}

  desenvolvedorService  = inject(DesenvolvedorService);


  cadastrarDesenvolvedor(desenvolvedor: Desenvolvedor){
    this.desenvolvedorService.cadastrarDesenvolvedor(desenvolvedor).subscribe({
      next: mensagem => {
      },
      error: (error: any) => {
        alert('Erro ao buscar desenvolvedores');
        console.error('Erro ao buscar desenvolvedores:', error);
      }
    });
  }


}
