// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const INCREMENT = 'INCREMENT'
const RESET = 'RESET'

function init(initialStateFromProps) {
  return {
    count: initialStateFromProps,
  }
}

function countReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return {count: state.count + action.step}
    case RESET:
      return {count: 0}
    default:
      console.warn('unhandled action', action.type)
      return state
  }
}

function Counter({initialCount = 0, step = 1}) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, dispatch] = React.useReducer(
    countReducer,
    {
      count: initialCount,
    },
    () => init(initialCount),
  )

  const {count} = state
  // 💰 you can write the countReducer function so you don't have to make any
  // changes to the next two lines of code! Remember:
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const increment = () => dispatch({type: INCREMENT, step})
  const reset = () => dispatch({type: RESET})
  return (
    <button onClick={increment} onBlur={reset}>
      {count}
    </button>
  )
}

function App() {
  return <Counter />
}

export default App
