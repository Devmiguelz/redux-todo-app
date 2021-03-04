import { Action } from "@ngrx/store";
import { AGREGAR_TODO, 
         BORRAR_TODO, 
         EDITAR_TODO, 
         TOGGLE_TODO, 
         COMPLETAR_TODO, 
         BORRAR_ALL_TODO 
        } from '../types/todo.types';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) { }
}

export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string) { }
}

export class BorrarTodoAction implements Action {
    readonly type = BORRAR_TODO;

    constructor(public id: number) { }
}

export class CompletadoTodoAction implements Action {
    readonly type = COMPLETAR_TODO;

    constructor(public completado:boolean) { }
}

export class BorrarTodosTodoAction implements Action {
    readonly type = BORRAR_ALL_TODO;
}

export type ActionsTodo = AgregarTodoAction | 
                      ToggleTodoAction | 
                      EditarTodoAction |
                      BorrarTodoAction |
                      CompletadoTodoAction |
                      BorrarTodosTodoAction;