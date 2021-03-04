import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, CompletadoTodoAction } from './redux/actions/todo.actions';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit {

completado: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  completarTodo(): void {
    this.completado = !this.completado;
    const accion = new CompletadoTodoAction(this.completado);
    this.store.dispatch(accion);
  }

}
