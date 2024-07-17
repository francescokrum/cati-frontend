import { Component } from '@angular/core';
import { Tarefa } from '../../../models/tarefa';
import { Desenvolvedor } from '../../../models/desenvolvedor';
import { TarefaService } from '../../../services/tarefa.service';
import { DesenvolvedorService } from '../../../services/desenvolvedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrl: './cadastrar-tarefa.component.css'
})
export class CadastrarTarefaComponent {

  tarefa: Tarefa = new Tarefa();
  desenvolvedores: Desenvolvedor[] = [];

  constructor(private tarefaService:TarefaService, private desenvolvedorService:DesenvolvedorService){}

  ngOnInit(): void{
    this.desenvolvedorService.buscarDesenvolvedores().subscribe(
      (data: Desenvolvedor[]) => {
        this.desenvolvedores = data;
      },
      (error) => {
        console.error('Erro ao buscar devs', error);
      }
    )
  }

  cadastrarTarefa(): void{
    const devSelecionado = this.desenvolvedores.find(d => d.id === this.tarefa.desenvolvedor.id);
    if(devSelecionado){
      this.tarefa.desenvolvedor = devSelecionado;
    }

    this.tarefaService.cadastrarTarefa(this.tarefa).subscribe({
      next: mensagem => {
        Swal.fire({
          icon: "success",
          title: "Tarefa enviada!"
        });
        this.tarefa = new Tarefa();
      },
      error: (error: any) => {
        Swal.fire({
          icon: "error",
          title: "Erro ao enviar tarefa!"
        });
      }
    })
  }
  onDesenvolvedorChange(event: Desenvolvedor): void {
    this.tarefa.desenvolvedor = event;
  }
}
