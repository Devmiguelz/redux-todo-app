import { Todo } from '../../model/todo.model';
import { ActionsTodo } from '../actions/todo.actions';
import { AGREGAR_TODO, 
         EDITAR_TODO, 
         TOGGLE_TODO, 
         BORRAR_TODO, 
         COMPLETAR_TODO, 
         BORRAR_ALL_TODO 
        } from '../types/todo.types';


const todo1 = new Todo("Vencer a thanos");
const todo2 = new Todo("Salvar el mundo");

const estadoInicial: Todo[] = [todo1, todo2];

export function TodoReducer(state = estadoInicial, action: ActionsTodo): Todo[] {

    switch (action.type) {

        case AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];

        case TOGGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    }
                } else {
                    return todoEdit;
                }
            });

        case EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    }
                } else {
                    return todoEdit;
                }
            });

        case BORRAR_TODO:
            return state.filter(todoEdit => todoEdit.id !== action.id);

        case COMPLETAR_TODO:
            return state.map(todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                }
            });
        case BORRAR_ALL_TODO:
            return state.filter(todoEdit => !todoEdit.completado );

        default:
            return state;

    }
}