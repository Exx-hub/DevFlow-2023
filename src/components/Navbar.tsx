import { Link } from "react-router-dom";
import logo from "../assets/devflow-logo.png";

function Navbar() {
  return (
    <header className="border border-red-500 flex justify-between items-center px-5 py-3">
      <div className="w-[160px]">
        <img src={logo} alt="logo of devflow" />
      </div>
      <nav className="flex space-x-5 text-sm">
        <Link to="/">Home</Link>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/pomodoro">Pomodoro</Link>
        <Link to="/debug">Debug</Link>
      </nav>
    </header>
  );
}

export default Navbar;
