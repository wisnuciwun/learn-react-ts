import { useReducer } from "react";

const initialState = {count: 0}

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction //discriminated unions


// function reducer(state: {count: number}, action: {type: 'increment' | 'decrement' | 'reset', payload?: number}) { // another way to declare type and using union of string
function reducer(state: {count: number}, action: CounterAction) {
switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload}
        case 'decrement':
            return { count: state.count - action.payload}
        case 'reset':
            return initialState
    
        default:
            return state
    }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

    return (
  <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment', payload: 50})}>Increment 50</button>
      <button onClick={() => dispatch({type: 'decrement', payload: 50})}>Decrement 50</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
  </>
  );
}
