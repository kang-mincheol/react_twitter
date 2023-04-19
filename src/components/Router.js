// import React, { useState } from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import Auth from '../routes/Auth';
// import Home from '../routes/Home';

// const AppRouter = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <Router>
//       <Routes>
//         {isLoggedIn ? (
//           <>
//             <Route path="/" component={<Home />} />
//           </>
//         ) : (
//           <Route path="/" component={<Auth />} />
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default AppRouter;
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from '../routes/Auth';
import EditProfile from '../routes/EditProfile';
import Home from '../routes/Home';
import Profile from '../routes/Profile';

const useRouter = () => {
  const [isLoggenIn, setIsLoggenIn] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: isLoggenIn ? <Home /> : <Auth />,
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
