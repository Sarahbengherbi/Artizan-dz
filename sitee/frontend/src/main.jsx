import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


// sidebar
import Sidebar from "./components/Sidebar.jsx";
import Messagerie from './Pages/Messagerie.jsx';

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {

    path: "/",
    element: <App />,
  },
  {

    path: "/Sidebar",
    element: <Sidebar />,
  },

 
  //sidebar
 
  {
    path: "/Messagerie",
    element: <Messagerie/>,
  }
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);
