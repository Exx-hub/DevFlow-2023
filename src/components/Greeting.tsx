import useGetTIme from "../hooks/useGetTime";
import useGreeting from "../hooks/useGreeting";

function Greeting() {
  const { greeting } = useGreeting();
  const { time } = useGetTIme();
  return (
    <div className="flex flex-col items-center mb-10">
      <h2 className="text-2xl lg:text-6xl font-medium font-sans black_gradient">
        good <span>{greeting}</span>, Alvin!
      </h2>
      <p className="text-[#7d7d7d] text-xs lg:text-sm">{time}</p>
    </div>
  );
}

export default Greeting;
