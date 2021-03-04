import { ActionReducerMap } from '@ngrx/store';
import { Todo } from './todo/model/todo.model';
import { TodoReducer } from './todo/redux/reducers/todo.reducer';
import { FiltroReducer } from './todo/redux/reducers/filtro.reducer';
import { filtrosValidos } from './todo/redux/actions/filtro.actions';

export interface AppState {
    todos: Todo[];
    filtro: filtrosValidos
}


export const appReducers: ActionReducerMap<AppState> = {
    todos: TodoReducer,
    filtro: FiltroReducer
};