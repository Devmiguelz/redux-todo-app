import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { filtrosValidos } from '../todo/redux/actions/filtro.actions';
import { TodosListComponent } from '../todo/todos-list/todos-list.component';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroTodoPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case "completado":
        return todos.filter(todo => todo.completado);        
      case "pendiente":
        return todos.filter(todo => !todo.completado);        
      default:
        return todos;
    }
  }
}
