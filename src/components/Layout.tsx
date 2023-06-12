import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <main className="mx-auto w-[80%] max-w-[1250px]">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default Layout;
