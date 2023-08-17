import React, { useEffect } from 'react';

export default function Timer({ questionNumber, setStop }) {
  const [timer, setTimer] = React.useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    if (timer === 0) {
      return setStop(true);
    }
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return <div>{timer}</div>;
}
