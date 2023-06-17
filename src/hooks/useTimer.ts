import { useEffect, useState } from "react";

const useTimer = () => {
  const [remainingTime, setRemainingTime] = useState<number>(1500); // 300 seconds = 5 minutes
  const [isRunning, setIsRunning] = useState(false);

  console.log(remainingTime);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timer | undefined = undefined;

    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, remainingTime]);

  // Timer controls
  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setRemainingTime(1500);
    setIsRunning(false);
  };

  // Timer display
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return { minutes, seconds, startTimer, stopTimer, resetTimer };
};

export default useTimer;
