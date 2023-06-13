import { Link, useMatch } from "react-router-dom";
import logo from "../assets/devflow-logo.png";
import Weather from "./Weather";

// if on root route, hide navlinks

function Navbar() {
  const home = useMatch("/");

  return (
    <header className="flex justify-between items-center lg:px-5 py-3">
      <Link to="/" className="w-[160px]">
        <img src={logo} alt="logo of devflow" />
      </Link>

      {!home && (
        <nav className="flex space-x-5 text-sm flex-1 justify-center">
          <Link to="/">Home</Link>
          <Link to="/chatbot">Chatbot</Link>
          <Link to="/pomodoro">Pomodoro</Link>
          <Link to="/debug">Debug</Link>
        </nav>
      )}

      <Weather />
    </header>
  );
}

export default Navbar;
