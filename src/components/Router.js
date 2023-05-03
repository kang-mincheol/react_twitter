import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from '../routes/Auth';
import EditProfile from '../routes/EditProfile';
import Home from '../routes/Home';
import Profile from '../routes/Profile';

const useRouter = isLoggedIn => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: isLoggedIn ? <Home /> : <Auth />,
    },
    {
      path: '/edit-profile',
      element: <EditProfile />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
  ]);
  return router;
};

const Router = () => {
  const router = useRouter();
  return <RouterProvider router={router} />;
};
export default Router;
