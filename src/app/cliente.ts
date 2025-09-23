import { cliente } from './cadastro/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() { }

  static REPO_CLIENTES = "_CLIENTES";

  salvar(cliente: cliente) {
    console.log("Dados cliente: ", cliente);
  }

  obterDadosClientesStorage(): cliente[] {
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
