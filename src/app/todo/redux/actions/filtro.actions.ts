import { Action } from '@ngrx/store';
import { SET_FILTRO } from '../types/filtro.types';

export type filtrosValidos = "todos" | "completado" | "pendiente";


export class SetFiltroTodoAction implements Action {
    readonly type = SET_FILTRO;

    constructor(public filtro: filtrosValidos) { }
}

export type ActionsFiltro = SetFiltroTodoAction;