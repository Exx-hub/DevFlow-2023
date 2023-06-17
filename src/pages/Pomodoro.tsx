import CurrentTask from "../components/CurrentTask";
import Timer from "../components/Timer";
import useTitle from "../hooks/useTitle";

function Pomodoro() {
  useTitle("DevFlow AI - Pomodoro");
  return (
    <div className="w-full h-[calc(100vh-58px)] pt-20 xl:pt-32 animate-fadeIn">
      <div className="w-full md:w-[500px] flex flex-col items-center justify-center mx-auto rounded-md bg-gray-100 p-8 shadow-lg">
        {/* current task  */}
        <CurrentTask />
        {/* timer component  */}
        <Timer />
      </div>
    </div>
  );
}

export default Pomodoro;
