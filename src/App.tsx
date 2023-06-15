import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatBot from "./pages/ChatBot";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import DebugDucky from "./pages/DebugDucky";
import Pomodoro from "./pages/Pomodoro";
import StickyNotes from "./pages/StickyNotes";
import Goals from "./pages/Goals";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/chatbot",
          element: <ChatBot />,
        },
        {
          path: "/debug-ducky",
          element: <DebugDucky />,
        },
        {
          path: "/goals",
          element: <Goals />,
        },
        {
          path: "/pomodoro",
          element: <Pomodoro />,
        },
        {
          path: "/sticky-notes",
          element: <StickyNotes />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="main -z-10">
        <div className="gradient h-screen"></div>
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
