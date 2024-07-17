import { Component } from '@angular/core';
import { Tarefa } from '../../../models/tarefa';
import { TarefaService } from '../../../services/tarefa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tarefa-dev',
  templateUrl: './lista-tarefa-dev.component.html',
  styleUrl: './lista-tarefa-dev.component.css'
})
export class ListaTarefaDevComponent {

  tarefa: Tarefa = new Tarefa();
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService){}

  ngOnInit(): void {
    this.tarefaService.buscarTarefaPorDev().subscribe(
      (data: Tarefa[]) => {
        this.tarefas = data;
        console.log(this.tarefas);
      },
      (error) => {
        console.error('Erro ao buscar tarefas', error);
      }
    );
  }

  editarTarefa(tarefa: Tarefa): void {
    this.tarefaService.editarTarefa(tarefa).subscribe({
      next: mensagem => {
        Swal.fire({
          icon: "success",
          title: "Tarefa atualizada!"
        });
      },
      error: (error: any) => {
        Swal.fire({
          icon: "error",
          title: "Erro ao atualizar tarefa!"
        });
      }
    });
  }

  onStatusChange(event: string): void {
      this.tarefa.status = event;
    }
}
