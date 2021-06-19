import { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default function useNotifications(initialDelay) {
  let [count, setCount] = useState(0);
  let [delay, setDelay] = useState(initialDelay);

  useInterval(() => {
    const newCount =   parseInt(Math.random() * 200);
    setCount(newCount);
  }, delay);

  return { count, delay, setDelay }

}