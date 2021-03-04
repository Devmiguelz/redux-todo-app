import { filtrosValidos, ActionsFiltro } from '../actions/filtro.actions';
import { SET_FILTRO } from '../types/filtro.types';

const estadoInicial: filtrosValidos = "todos";

export function FiltroReducer(state = estadoInicial, action: ActionsFiltro): filtrosValidos {

    switch (action.type) {

        case SET_FILTRO:
            return action.filtro;

        default:
            return state;
    }
}