import React from "react";

interface Props {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onIncrementAsync: ({ ms }: { ms: number }) => void;
}

export default ({
  value,
  onIncrement,
  onDecrement,
  onIncrementAsync,
}: Props) => (
  <div>
    <button onClick={() => onIncrementAsync({ ms: 2000 })}>
      Increment after 1 second
    </button>{" "}
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);
