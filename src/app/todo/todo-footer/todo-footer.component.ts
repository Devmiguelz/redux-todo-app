import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtrosValidos, SetFiltroTodoAction } from '../redux/actions/filtro.actions';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import { BorrarTodosTodoAction } from '../redux/actions/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: [
  ]
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: filtrosValidos[] = ["todos", "completado", "pendiente"];
  filtroActual: filtrosValidos;
  pendintes: number;
  completada: boolean;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state=>{
      this.filtroActual = state.filtro;      
      this.contarPendientes(state.todos); 
    });
  }

  contarPendientes(todo: Todo[]) : void{
    this.pendintes = todo.filter(todo => !todo.completado).length;
  }

  cambiarFiltro(filtro: filtrosValidos): void{
    const accion = new SetFiltroTodoAction(filtro);
    this.store.dispatch(accion);
  }

  borrarTodo(){
    const accion = new BorrarTodosTodoAction();
    this.store.dispatch(accion);
  }

}
