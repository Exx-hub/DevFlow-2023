import { useEffect } from "react";
import ducky from "../assets/ducky.png";
import quack from "../assets/quack.mp3";
import useTitle from "../hooks/useTitle";

function DebugDucky() {
  useTitle("DevFlow AI - Debug Ducky");

  useEffect(() => {
    const audio = new Audio(quack);

    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return (
    <div className="w-full h-[calc(100vh-58px)] flex flex-col items-center pt-28 animate-fadeIn">
      <h2 className="min-w-[278px] text-xl sm:text-2xl lg:text-4xl black_gradient">
        Debug Ducky. <span className="text-black">Quack the code.</span>
      </h2>

      <p className="text-gray-500"> What's wrong with your code?</p>

      <div className="w-[90%] sm:w-96 mt-20">
        <img src={ducky} alt="image of a rubber ducky" className="animate-[wiggle_1500ms_4]" />
      </div>
    </div>
  );
}

export default DebugDucky;
