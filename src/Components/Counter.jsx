import React, { useEffect } from 'react'
import useCounterStore from '../App/counterStore';

const Counter = () => {
  // const { count, increment, decrement } = useCounterStore();
  const count = useCounterStore(state => state.count);
  const increment = useCounterStore(state => state.increment);
  const decrement = useCounterStore(state => state.decrement);
  const { currentData, currentValue, reset } = useCounterStore();

  return (
    <div>
      <div className="App">
        <button className='button' onClick={increment}>Increment</button>
        <span>{count}</span>
        <button className='button' onClick={decrement}>Decrement</button>
        <button className='button' onClick={currentValue}>Current Value</button>
        <span>{currentData}</span>
        <button className="button" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter;
