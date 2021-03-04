import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { EditarTodoAction, ToggleTodoAction, BorrarTodoAction } from '../redux/actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: [
  ]
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  chkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  @ViewChild('txtInputHtml') txtInputHtml: ElementRef;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkField.valueChanges.subscribe(() => {
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });

  }

  editar(): void {
    this.editando = true;
    setTimeout(() => {
      this.txtInputHtml.nativeElement.select();
    }, 1);
  }

  terminarEdicion(): void {
    this.editando = false;

    if (this.txtInput.invalid) {
      return;
    }

    const accion = new EditarTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);
  }

  borrarTodo(): void {
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }

}
