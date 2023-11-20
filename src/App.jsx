import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import GlobalStyles from "./GlobalStyled";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import PageNotFound from "./pages/PageNotFound";
import { ClickProvider } from "./context/ClickContext";
import Moon from "./pages/Moon";
import Europa from "./pages/Europa";
import Titan from "./pages/Titan";
import Mars from "./pages/Mars";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/destinations",
        element: <Destinations replace to="moon" />,
        children: [
          {
            path: "/destinations",
            loader: () => redirect("/destinations/moon"),
          },
          {
            path: "/destinations/moon",
            element: <Moon />,
          },
          {
            path: "/destinations/mars",
            element: <Mars />,
          },
          {
            path: "/destinations/europa",
            element: <Europa />,
          },
          {
            path: "/destinations/titan",
            element: <Titan />,
          },
        ],
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <ClickProvider>
        <RouterProvider router={router} />
      </ClickProvider>
    </>
  );
}

export default App;
