import { cliente } from './cadastro/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() { }

  static REPO_CLIENTES = "_CLIENTES";

  salvar(cliente: cliente) {
    const storage = this.obterDadosClientesStorage();
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  atualizar(cliente: cliente) {
    const storage = this.obterDadosClientesStorage();
    storage.forEach(c => {
      if(c.id === cliente.id) {
        Object.assign(c, cliente);
      }
    })
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  deletar(cliente: cliente) {
    const storage = this.obterDadosClientesStorage();

    const index = storage.findIndex(c => c.id === cliente.id);
    if(index > -1) {
      storage.splice(index, 1);
    }

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
  }

  pesquisarClientes(nome: string): cliente[] {
    const clientes = this.obterDadosClientesStorage();
    if(!nome) {
      return clientes;
    }

    return clientes.filter(c => c.nome?.indexOf(nome) !== -1);
  }

  pesquisarClientePorId(id: string): cliente | undefined {
    const clientes = this.obterDadosClientesStorage();
    return clientes.find(c => c.id == id);
  }

  private obterDadosClientesStorage(): cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
    if(repositorioClientes) {
      const clientes: cliente[] = JSON.parse(repositorioClientes);
      return clientes;
    }
    const clientes: cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clientes));
    return clientes;
  }
}
