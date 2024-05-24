import React from "react";
import { Header } from "./components";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {
  Collections,
  ErrorPage,
  ElementsPage,
  Projects,
  Manufacturers,
  Materials,
} from "./views";
import "./App.css";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Collections />,
        },
        {
          path: "/elements",
          element: <ElementsPage />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },

        {
          path: "/manufacturers",
          element: <Manufacturers />,
        },
        {
          path: "/materials",
          element: <Materials />,
        },
        {
          path: "/collections",
          element: <Collections />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: "/revalu-code-assignment",
  }
);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
