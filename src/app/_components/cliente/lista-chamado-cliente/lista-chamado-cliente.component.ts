import { Component } from '@angular/core';
import { Chamado } from '../../../models/chamado';
import { ChamadoService } from '../../../services/chamado.service';

@Component({
  selector: 'app-lista-chamado-cliente',
  templateUrl: './lista-chamado-cliente.component.html',
  styleUrl: './lista-chamado-cliente.component.css'
})
export class ListaChamadoClienteComponent {

  chamados: Chamado[] = [];

  constructor(private chamadoService: ChamadoService){}

  ngOnInit(): void{
    this.chamadoService.buscarChamadoPorCliente().subscribe(
      (data: Chamado[]) => {
        this.chamados = data;
      },
      (error) => {
        console.error('Erro ao buscar chamados', error);
      }
    )
  }

}
