import { v4 as uuid } from 'uuid'

export class cliente {
  id?: string;
  nome?: string;
  cpf?: string;
  dataNascimento?: string;
  email?: string;
  deletar: boolean = false;

  static newCliente() {
    const novoCliente = new cliente();
    novoCliente.id = uuid();
    return novoCliente;
  }
}
