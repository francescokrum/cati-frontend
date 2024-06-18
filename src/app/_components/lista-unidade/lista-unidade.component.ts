import { Component, inject } from '@angular/core';
import { Unidade } from '../../models/unidade';
import { UnidadeService } from '../../services/unidade.service';

@Component({
  selector: 'app-lista-unidade',
  templateUrl: './lista-unidade.component.html',
  styleUrl: './lista-unidade.component.css'
})
export class ListaUnidadeComponent {

    lista: Unidade[] = [];
    private unidadeService = inject(UnidadeService)

    constructor() {}

    ngOnInit(): void {
    this.buscarUnidades();
  }

  buscarUnidades(): void{
    this.unidadeService.buscarUnidades().subscribe({
      next: (lista: Unidade[]) => {
        this.lista = lista;
      },
      error: (error: any) => {
        alert('Erro ao buscar desenvolvedores');
        console.error('Erro ao buscar desenvolvedores:', error);
      }
    })
  }

  removerDev(unidade: Unidade): void {
    if (unidade.id !== undefined) {
      this.unidadeService.removerUnidade(unidade.id).subscribe({
        next: mensagem => {
          this.lista = this.lista.filter(dev => dev.id !== unidade.id);
        },
        error: (error: any) => {
          alert('Erro ao remover desenvolvedor');
          console.error('Erro ao remover desenvolvedor:', error);
        }
      });
    } else {
      alert('ID do desenvolvedor não está definido');
    }
  }
}
