import FeatureCard from "../components/FeatureCard";
import Greeting from "../components/Greeting";
import useTitle from "../hooks/useTitle";

function HomePage() {
  useTitle("DevFlow AI - Home");
  return (
    <div className="h-[calc(100vh-58px)] relative flex flex-col items-center justify-center animate-fadeIn">
      <Greeting />
      <FeatureCard />
    </div>
  );
}

export default HomePage;
