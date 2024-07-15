import { Component } from '@angular/core';
import { Desenvolvedor } from '../../../models/desenvolvedor';
import { DesenvolvedorService } from '../../../services/desenvolvedor.service';

@Component({
  selector: 'app-button-perfil-dev',
  templateUrl: './button-perfil-dev.component.html',
  styleUrl: './button-perfil-dev.component.css'
})
export class ButtonPerfilDevComponent {

  desenvolvedor: Desenvolvedor = new Desenvolvedor();

  constructor(private desenvolvedorService: DesenvolvedorService){}

  ngOnInit(): void {
    this.desenvolvedorService.buscarDesenvolvedor().subscribe(
      (data: Desenvolvedor) => {
        this.desenvolvedor = data;
      },
      (error) => {
        console.error('Erro ao buscar cliente', error);
      }
    )
  }

}
