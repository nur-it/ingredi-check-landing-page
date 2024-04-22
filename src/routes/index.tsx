import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import TramsAndCondition from "../pages/TramsAndCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/trams-condition",
        element: <TramsAndCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);
