import Greeting from "../components/Greeting";
import Weather from "../components/Weather";

function HomePage() {
  return (
    <div className="h-screen relative">
      <Greeting />
      <Weather />
      {/* feature cards carousel  */}
    </div>
  );
}

export default HomePage;
