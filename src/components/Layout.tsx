import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <main className="mx-auto w-[80%] max-w-[1250px] relative">
      <Navbar />
      <Outlet />
      <footer className="absolute bottom-0 left-0 text-[9.5px] lg:text-[10px] text-gray-500 font-light">
        *Authentication and route restriction disabled for presentation purposes.
        <span className="hidden md:inline">
          ---
          <a href="www.acosta.codes" target="_blank" className="underline">
            {" "}
            www.acosta.codes
          </a>
          · Copyright © 2023
        </span>
      </footer>
    </main>
  );
}

export default Layout;
