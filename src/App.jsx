import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { useState } from "react";
import Root from "./components/Root";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./container/Dashboard";

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

const App = () => {
  const [currentForm, setCurrentForm] = useState("signin");
  const toggleForm = (fornName) => {
    setCurrentForm(fornName);
  };
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
