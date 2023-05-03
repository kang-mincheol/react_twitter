import React, { useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';

const App = () => {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return <AppRouter isLoggedIn={isLoggedIn} />;
};

export default App;
