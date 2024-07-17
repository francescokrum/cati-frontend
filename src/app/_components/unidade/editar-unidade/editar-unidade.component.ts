import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnidadeService } from '../../../services/unidade.service';
import { Unidade } from '../../../models/unidade';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-unidade',
  templateUrl: './editar-unidade.component.html',
  styleUrl: './editar-unidade.component.css'
})
export class EditarUnidadeComponent {
  unidadeId!: number;
  unidade: Unidade = new Unidade();

  constructor(private route: ActivatedRoute, private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.unidadeId = +params['id']; // Captura o parâmetro 'id' da rota e converte para número
      console.log('ID da unidade:', this.unidadeId);

      this.unidadeService.buscarUnidadePorId(this.unidadeId).subscribe(
        (unidade: Unidade) => {
          this.unidade = unidade;
          console.log('Detalhes da unidade:', this.unidade);
        },
        error => {
          console.error('Erro ao buscar unidade:', error);
          // Trate o erro de busca da unidade aqui, se necessário
        }
      );
    });
  }

  editarUnidade(unidade: Unidade): void{

    this.unidadeService.editarUnidade(unidade).subscribe({
      next: mensagem => {
        Swal.fire({
          icon: "success",
          title: "Unidade de Negócio editada!"
        });
      },
      error: (error: any) => {
        Swal.fire({
          icon: "error",
          title: "Erro ao editar Unidade de Negócio!"
        });
      }
    })
  }
}
