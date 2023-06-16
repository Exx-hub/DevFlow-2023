import { Link, useMatch } from "react-router-dom";
import logo from "../assets/devflow-logo.png";
import Weather from "./Weather";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const home = useMatch("/");
  const chatbot = useMatch("/chatbot");
  const pomodoro = useMatch("/pomodoro");
  const goals = useMatch("/goals");
  const debug = useMatch("/debug-ducky");
  const sticky = useMatch("/sticky-notes");

  return (
    <header className="flex justify-between items-center lg:px-5 py-3 relative">
      <div className="w-[130px] md:w-[160px] flex items-center">
        <Link to="/" className="w-full">
          <img src={logo} alt="logo of devflow" />
        </Link>
        <span
          className="lg:hidden cursor-pointer hover:scale-125 transition-all duration-300"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <FaCaretDown />
        </span>
      </div>

      {!home && (
        <nav className="hidden lg:flex space-x-5 text-sm flex-1 justify-center text-[#7F7F7F]">
          <Link to="/" className={home ? "active-link" : ""}>
            Home
          </Link>
          <Link to="/sticky-notes" className={sticky ? "active-link" : ""}>
            StickyNotes
          </Link>
          <Link to="/debug-ducky" className={debug ? "active-link" : ""}>
            Debug
          </Link>
          <Link to="/chatbot" className={chatbot ? "active-link" : ""}>
            Chatbot
          </Link>
          <Link to="/goals" className={goals ? "active-link" : ""}>
            Goals
          </Link>
          <Link to="/pomodoro" className={pomodoro ? "active-link" : ""}>
            Pomodoro
          </Link>
        </nav>
      )}

      <nav
        className={`lg:hidden mobile-nav ${!menuOpen && "mobileMenuHidden"} `}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <Link to="/">Home</Link>
        <Link to="/sticky-notes">StickyNotes</Link>
        <Link to="/debug-ducky">Debug</Link>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/pomodoro">Pomodoro</Link>
      </nav>

      <Weather />
    </header>
  );
}

export default Navbar;
