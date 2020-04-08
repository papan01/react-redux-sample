import { VISIBILITY_FILTERS } from '../filter/filter';

export function getTodosAsIds(state) {
  return state.todoState.ids
    .map(id => state.todoState.entities[id])
    .filter(VISIBILITY_FILTERS[state.filterState])
    .map(todo => todo.id);
}
export function getTodo(state, todoId) {
  return state.todoState.entities[todoId];
}
