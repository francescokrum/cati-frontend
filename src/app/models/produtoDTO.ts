import { Unidade } from "./unidade";

export class ProdutoDTO{

  id?: number;
  nome!: string;
  unidadeDeNegocio!: Unidade;
}
