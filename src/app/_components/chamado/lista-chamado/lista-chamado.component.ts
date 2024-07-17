import { Component } from '@angular/core';
import { Chamado } from '../../../models/chamado';
import { ChamadoService } from '../../../services/chamado.service';
import { ChamadoDTO } from '../../../models/chamadoDTO';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-chamado',
  templateUrl: './lista-chamado.component.html',
  styleUrl: './lista-chamado.component.css'
})
export class ListaChamadoComponent {

  chamados: Chamado[] = [];
  chamadoDTO: ChamadoDTO = new ChamadoDTO();

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

  transformaEmDTO(chamado: Chamado): void {
    if (chamado.id !== undefined && chamado.status !== undefined) {
      this.chamadoDTO.id = chamado.id;
      this.chamadoDTO.status = chamado.status;
      console.log(this.chamadoDTO);
      this.editarChamado(this.chamadoDTO);
    } else {
      console.error('ID do chamado é indefinido');
    }
  }

  editarChamado(chamadoDTO: ChamadoDTO): void {
    console.log('entrou no editar');
    console.log('ChamadoDTO:', chamadoDTO);
    this.chamadoService.editarChamado(chamadoDTO).subscribe({
      next: mensagem => {
        Swal.fire({
          icon: "success",
          title: "Chamado atualizado para o cliente!"
        });
      },
      error: (error: any) => {
        Swal.fire({
          icon: "error",
          title: "Erro ao atualizar chamado!"
        });
      }
    });
  }

}
