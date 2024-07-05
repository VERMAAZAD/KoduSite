import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Courses from "./Components/Courses/Courses.jsx";
import AboutCourse from "./Components/AboutCourses/AboutCourse.jsx";
import Center from "./Components/Centers/Center.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Courses",
        element: <Courses />,
      },
      {
        path: "/Courses/AboutCourses",
        element: <AboutCourse />,
      },
      {
        path: "/Center",
        element: <Center />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
