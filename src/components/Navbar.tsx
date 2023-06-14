import { Link, useMatch } from "react-router-dom";
import logo from "../assets/devflow-logo.png";
import Weather from "./Weather";

function Navbar() {
  const home = useMatch("/");
  const chatbot = useMatch("/chatbot");
  const pomorodo = useMatch("/pomodoro");
  const debug = useMatch("/debug-ducky");

  return (
    <header className="flex justify-between items-center lg:px-5 py-3">
      <Link to="/" className="w-[160px]">
        <img src={logo} alt="logo of devflow" />
      </Link>

      {!home && (
        <nav className="hidden lg:flex space-x-5 text-sm flex-1 justify-center text-[#7F7F7F]">
          <Link to="/" className={home ? "active-link" : ""}>
            Home
          </Link>
          <Link to="/chatbot" className={chatbot ? "active-link" : ""}>
            Chatbot
          </Link>
          <Link to="/debug-ducky" className={debug ? "active-link" : ""}>
            Debug
          </Link>
          <Link to="/pomodoro" className={pomorodo ? "active-link" : ""}>
            Pomodoro
          </Link>
        </nav>
      )}

      <Weather />
    </header>
  );
}

export default Navbar;
