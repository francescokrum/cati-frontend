import { Component, inject } from '@angular/core';
import { DesenvolvedorService } from '../../../services/desenvolvedor.service';
import { Desenvolvedor } from '../../../models/desenvolvedor';
import Swal from 'sweetalert2';

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
        Swal.fire({
          icon: "success",
          title: "Desenvolvedor cadastrado!",
        });
        this.desenvolvedor = new Desenvolvedor();
      },
      error: (error: any) => {
        Swal.fire({
          icon: "error",
          title: "Dados invalidos ao cadastrar desenvolvedor!"
        });
      }
    });
  }


}
