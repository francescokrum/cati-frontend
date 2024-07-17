import { Component, inject } from '@angular/core';
import { Unidade } from '../../../models/unidade';
import { UnidadeService } from '../../../services/unidade.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-unidade',
  templateUrl: './lista-unidade.component.html',
  styleUrl: './lista-unidade.component.css'
})
export class ListaUnidadeComponent {

    lista: Unidade[] = [];
    private unidadeService = inject(UnidadeService)

    constructor(private router: Router) {}

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

  editarUnidade(id?: number): void {
    if (id !== undefined) {
      this.router.navigate(['/admin/editarUnidade', id]);
    } else {
      console.error('ID da unidade não está definido.');
    }
  }

  removerDev(unidade: Unidade): void {
    if (unidade.id !== undefined) {
      this.unidadeService.removerUnidade(unidade.id).subscribe({
        next: mensagem => {
          this.lista = this.lista.filter(dev => dev.id !== unidade.id);
          Swal.fire({
            icon: "success",
            title: "Unidade de negócio excluída!"
          });
        },
        error: (error: any) => {
          Swal.fire({
            icon: "error",
            title: "Não pode excluir uma unidade vinculada a clientes e produtos!"
          });
        }
      });
    } else {
      alert('ID do desenvolvedor não está definido');
    }
  }
}
