import React from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import BaseLayout from "./layout/BaseLayout";
import NotFoundPage from "./pages/Errors/NotFoundPage";
import ThikrPage from "./pages/ThikrPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/athkars/:id" element={<ThikrPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
