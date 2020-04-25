# Redux

View -> Action -> Reducer(s) -> Store -> View

immutability:永遠回傳一個新的物件，不修改既有物件。

- Action(s): An action in Redux is a JavaScript object. It has a type and an optional payload. The type is often referred to as action type. While the type is a string literal, the payload can be anything from a string to an object.

```javascript
{
    type: 'TODO_ADD',
    todo: { id: '0', name: 'learn redux', completed: false },
},
{
  type: 'TODO_TOGGLE',
  todo: { id: '0' },
}
```

- Reducer(s): A reducer is a pure function, it has two inputs: state and action. Apart from the functional programming principle, namely that a reducer is a pure function without side-effects, it also embraces immutable data structures. It always returns a newState object without mutating the incoming prevState object.

```javascript
function reducer(state, action) { switch(action.type) {
    case 'TODO_ADD' : {
        // do something and return new state
    }
    case 'TODO_TOGGLE' : {
      // do something and return new state
    }
    default : return state; }
}
```

- Store:
  - Where do I trigger actions?
  - Who delegates the actions to the reducer?
  - Where do I get the updated state to glue it to my View?
  It is the Redux store. The store holds one global state object. There are no multiple stores and no multiple states. The store is only one instance in your application. In addition, it is the first library dependency you encounter when using Redux. Therefore, use the import statement to get the functionality to create the store object from the Redux library.

```javascript
const rootReducer = combineReducers({
  todoState: todoReducer,
  filterState: filterReducer,
});

...

function render() {
  ReactDOM.render(
    <TodoApp
      todos={store.getState().todoState}
      onToggleTodo={id => store.dispatch(doToggleTodo(id))}
    />,
    document.getElementById('root')
  );
}
```

## react-redux

```javascript
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

`Provider`實際為一個context, connect為HOC。

connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])(...);

View -> (mapDispatchToProps) -> Action -> Reducer(s) -> Store -> (mapStateToProps) -> View

https://react-redux.js.org/api/connect

## redux-sage

View -> (mapDispatchToProps) -> Action(ActionCreator) -> Effect(s)  -> Reducer(s) -> Store -> (mapStateToProps) -> View

https://github.com/redux-saga/redux-saga
https://neighborhood999.github.io/redux-saga/

takeEvery:會在每次事件觸發就啟動一個獨立的task，可一次啟動多個。
takeLatest:只會執行最後一次task，若前面已有正在run的task，會將它們關閉。
all:將多個effect導入rootSaga用。
take:暫停Generator直到符合的action被dispatch