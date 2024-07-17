import { Cliente } from "./cliente";
import { ProdutoDTO } from "./produtoDTO";

export class Chamado{

  id?: number;
  titulo!: string;
  descricao!: string;
  status?: string;
  gravidade!: string;
  recurso?: File;
  produto!: ProdutoDTO;
  cliente!: Cliente;

 }
