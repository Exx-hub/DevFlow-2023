import FeatureCard from "../components/FeatureCard";
import Greeting from "../components/Greeting";

function HomePage() {
  return (
    <div className="h-[calc(100vh-58px)] relative flex flex-col items-center justify-center animate-fadeIn">
      <Greeting />
      <FeatureCard />
    </div>
  );
}

export default HomePage;
