import CurrentTask from "../components/CurrentTask";
import Timer from "../components/Timer";

function Pomodoro() {
  return (
    <div>
      {/* current task  */}
      <CurrentTask />
      {/* timer component  */}
      <Timer />
    </div>
  );
}

export default Pomodoro;
