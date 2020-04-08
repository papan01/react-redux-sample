import { schema, normalize } from 'normalizr';
import { v4 as uuidv4 } from 'uuid';
import ActionTypes from './actionTypes';

const todos = [
  { id: uuidv4(), name: 'Redux Standalone with advanced Actions' },
  { id: uuidv4(), name: 'Redux Standalone with advanced Reducers' },
  { id: uuidv4(), name: 'Bootstrap App with Redux' },
  { id: uuidv4(), name: 'Naive Todo with React and Redux' },
  { id: uuidv4(), name: 'Sophisticated Todo with React and Redux' },
  { id: uuidv4(), name: 'Connecting State Everywhere' },
  { id: uuidv4(), name: 'Todo but more Features' },
  { id: uuidv4(), name: 'Todo with advanced Redux' },
  { id: uuidv4(), name: 'Todo with Notifications' },
  { id: uuidv4(), name: 'Hacker News with Redux' },
];

const todoSchema = new schema.Entity('todo');
const normalizedTodos = normalize(todos, [todoSchema]);
const initialTodoState = {
  entities: normalizedTodos.entities.todo,
  ids: normalizedTodos.result,
};

function applyAddTodo(state, action) {
  const todo = { ...action.todo, completed: false };
  const entities = { ...state.entities, [todo.id]: todo };
  const ids = [...state.ids, action.todo.id];
  return { ...state, entities, ids };
}

function applyToggleTodo(state, action) {
  const { id } = action.todo;
  const todo = state.entities[id];
  const toggledTodo = { ...todo, completed: !todo.completed };
  const entities = { ...state.entities, [id]: toggledTodo };
  return { ...state, entities };
}

export default function todoReducer(state = initialTodoState, action) {
  switch (action.type) {
    case ActionTypes.TODO_ADD: {
      return applyAddTodo(state, action);
    }
    case ActionTypes.TODO_TOGGLE: {
      return applyToggleTodo(state, action);
    }
    default:
      return state;
  }
}
