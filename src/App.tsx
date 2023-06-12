import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatBot from "./pages/ChatBot";
import Layout from "./components/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/chatbot",
          element: <ChatBot />,
        },
      ],
    },
  ]);

  return (
    <main className="mx-auto w-[80%] max-w-[1250px]">
      <div className="main -z-10">
        <div className="gradient h-screen"></div>
      </div>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
