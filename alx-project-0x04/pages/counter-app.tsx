import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { increment, decrement } from "../store/counterSlice";
import Header from "../components/layouts/Header";

const CounterApp: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-xl">Counter: {count}</h2>
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white m-2">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white m-2">
          Decrement
        </button>
      </main>
    </div>
  );
};

export default CounterApp;
