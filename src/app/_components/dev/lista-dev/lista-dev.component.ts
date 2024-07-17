import { Component, inject, OnInit } from '@angular/core';
import { Desenvolvedor } from '../../../models/desenvolvedor';
import { DesenvolvedorService } from '../../../services/desenvolvedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-dev',
  templateUrl: './lista-dev.component.html',
  styleUrls: ['./lista-dev.component.css']
})
export class ListaDevComponent implements OnInit {

  lista: Desenvolvedor[] = [];
  private desenvolvedorService = inject(DesenvolvedorService);

  constructor() {}

  ngOnInit(): void {
    this.buscarDesenvolvedores();
  }

  buscarDesenvolvedores(): void {
    this.desenvolvedorService.buscarDesenvolvedores().subscribe({
      next: (lista: Desenvolvedor[]) => {
        this.lista = lista;
      },
      error: (error: any) => {
        alert('Erro ao buscar desenvolvedores');
        console.error('Erro ao buscar desenvolvedores:', error);
      }
    });
  }

  removerDev(desenvolvedor: Desenvolvedor): void {
    if (desenvolvedor.id !== undefined) {
      this.desenvolvedorService.removerDev(desenvolvedor.id).subscribe({
        next: mensagem => {
          this.lista = this.lista.filter(dev => dev.id !== desenvolvedor.id);
          Swal.fire({
            icon: "success",
            title: "Desenvolvedor excluido!"
          });
        },
        error: (error: any) => {
          Swal.fire({
            icon: "error",
            title: "Não pode excluir um desenvolvedor com tarefas atribuídas!"
          });
        }
      });
    } else {
      alert('ID do desenvolvedor não está definido');
    }
  }
}
