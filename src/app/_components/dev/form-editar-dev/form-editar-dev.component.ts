import { Component } from '@angular/core';
import { Desenvolvedor } from '../../../models/desenvolvedor';
import { DesenvolvedorService } from '../../../services/desenvolvedor.service';

@Component({
  selector: 'app-form-editar-dev',
  templateUrl: './form-editar-dev.component.html',
  styleUrl: './form-editar-dev.component.css'
})
export class FormEditarDevComponent {

  desenvolvedor: Desenvolvedor = new Desenvolvedor();

  constructor(private desenvolvedorService: DesenvolvedorService){}

  ngOnInit(): void {
    this.desenvolvedorService.buscarDesenvolvedor().subscribe(
      (data: Desenvolvedor) => {
        this.desenvolvedor = data;
      },
      (error) => {
        console.error('Erro ao buscar dev', error);
      }
    )
  }

  editarDesenvolvedor(): void{

    this.desenvolvedorService.editarDesenvolvedor(this.desenvolvedor).subscribe({
      next: mensagem =>{
        console.log('Usuario editado com sucesso!', mensagem);
      },
      error: (error: any) => {
        alert('Erro ao editar seus dados');
        console.error('Erro ao editar usuario:', error);
      }
    })
  }
}
