import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screen/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
