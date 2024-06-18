import * as Big from 'big.js'

export class Desenvolvedor {

  id?: number
  nome!: string
  cpf!: string
  email!: string
  permissao?: string
  login!: string
  senha!: string
  dataNasc!: Date
  salario!: Big
  cargo!: string

}
