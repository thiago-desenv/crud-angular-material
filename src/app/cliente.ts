import { cliente } from './cadastro/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor() { }

    salvar(cliente: cliente) {
    console.log("Dados cliente: ", cliente);
  }
}
