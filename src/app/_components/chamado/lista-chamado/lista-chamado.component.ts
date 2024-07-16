import { Component } from '@angular/core';
import { Chamado } from '../../../models/chamado';
import { ChamadoService } from '../../../services/chamado.service';

@Component({
  selector: 'app-lista-chamado',
  templateUrl: './lista-chamado.component.html',
  styleUrl: './lista-chamado.component.css'
})
export class ListaChamadoComponent {

  chamados: Chamado[] = [];

  constructor(private chamadoService: ChamadoService){}

  ngOnInit(): void{
    this.chamadoService.buscarChamados().subscribe(
      (data: Chamado[]) => {
        this.chamados = data;
      },
      (error) => {
        console.error('Erro ao buscar chamados', error);
      }
    )
  }

}
