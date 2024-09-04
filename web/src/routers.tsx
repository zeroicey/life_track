import { createBrowserRouter } from "react-router-dom";
import Memo from "./pages/Memo";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/memo",
    element: <Memo />,
  },
  {
    path: "/task",
    element: <h2 className="text-center">Memo</h2>,
  },
  {
    path: "/article",
    element: <h2 className="text-center">Memo</h2>,
  },
  {
    path: "/collect",
    element: <h2 className="text-center">Memo</h2>,
  },
]);
