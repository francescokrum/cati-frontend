import { Component } from '@angular/core';
import { Tarefa } from '../../../models/tarefa';
import { TarefaService } from '../../../services/tarefa.service';

@Component({
  selector: 'app-lista-tarefa',
  templateUrl: './lista-tarefa.component.html',
  styleUrl: './lista-tarefa.component.css'
})
export class ListaTarefaComponent {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService){}

  ngOnInit(): void {
    this.tarefaService.buscarTarefas().subscribe(
      (data: Tarefa[]) => {
        this.tarefas = data;
        console.log(this.tarefas);
      },
      (error) => {
        console.error('Erro ao buscar tarefas', error);
      }
    );
  }

}
