import useTimer from "../hooks/useTimer";

function Timer() {
  const { minutes, seconds, startTimer, stopTimer, resetTimer } = useTimer();
  return (
    <div>
      <div>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;
