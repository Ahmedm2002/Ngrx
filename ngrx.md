# Ngrx

## Store

Stores applcation state

## Action

Type of the function to perform
Action => Reducer => Store

## Reducer

Actions to be performed on data like add, delete, update, read etc
Fuctions which will be the operations on data

## Selector

Getting data from the stroe
Way to get/read/fetch data from the store

Like suscribe in RxJx

### First create actoins

```
import { createAction } from '@ngrx/store';

export const incrementCounter = createAction('counter incremented');
//          counter name                      ...just name like console.log
```

Then in reducer file write the actual logic to be executed on that particular action

Before that create the initial State of the store

like

```
interface Counter {
  count : number
}

export const initialCount : Couter = {
  count : 0
}
```

Then write logic for actions in reducers

```
export const reducer = createReducer (initialCount,
  on(increamentCounter, (state) => ({...state, count: state.count + 1 }))
  on(decrementCounter, (state) => ({...state, count: state.count - 1 }))
)
```

// **on** means that when this action will be triggered execute this function
