import React from 'react'
import useCounterStore from '../App/counterStore';

const Counter = () => {
    const { count, increment, decrement } = useCounterStore();
  return (
    <div>
      <div className="App">
      <button className='button' onClick={increment}>Increment</button>
      <span>{ count}</span>
      <button className='button' onClick={decrement}>Decrement</button>
    </div>
    </div>
  )
}

export default Counter;
