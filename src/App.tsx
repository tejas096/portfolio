import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import Boilerplate from "./components/Boilerplate";
import Loading from "./components/Loading";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Boilerplate />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
