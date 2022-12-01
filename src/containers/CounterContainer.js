import React from 'react';
import Counter from '../component/Counter';
import { useSelector, useDispatch } from 'react-redux';
import {increase, decrease, increaseAsync, decreaseAsync} from '../redux/counter';

const CounterContainer = () => {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    //dispatch(increase());
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    //dispatch(decrease());
    dispatch(decreaseAsync());
  };

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

export default CounterContainer