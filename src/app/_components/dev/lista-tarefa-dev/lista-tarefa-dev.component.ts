import { Component } from '@angular/core';
import { Tarefa } from '../../../models/tarefa';
import { TarefaService } from '../../../services/tarefa.service';

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
    console.log('TAREFA:', tarefa);
    this.tarefaService.editarTarefa(tarefa).subscribe({
      next: mensagem => {
        console.log('Tarefa atualizada com sucesso!', mensagem);
      },
      error: (error: any) => {
        alert('Erro ao editar seus dados');
        console.error('Erro ao editar tarefa:', error);
      }
    });
  }

  onStatusChange(event: string): void {
      this.tarefa.status = event;
    }
}
