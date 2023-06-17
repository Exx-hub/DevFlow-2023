import useTimer from "../hooks/useTimer";

import { FiPlay } from "react-icons/fi";
import { TbPlayerPause } from "react-icons/tb";
import { BiReset } from "react-icons/bi";

function Timer() {
  const { minutes, seconds, startTimer, stopTimer, resetTimer } = useTimer();
  return (
    <div className="mt-5">
      <h2 className="text-center text-6xl">{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</h2>
      <div className="flex items-center justify-center  space-x-5 mt-5">
        <button className="timer-btn" onClick={stopTimer}>
          <TbPlayerPause />
        </button>
        <button className="timer-btn" onClick={resetTimer}>
          <BiReset />
        </button>
        <button className="timer-btn" onClick={startTimer}>
          <FiPlay />
        </button>
      </div>
    </div>
  );
}

export default Timer;
