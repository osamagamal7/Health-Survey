import React from 'react';
import {AppProvider} from './context/Provider';

import {AppNavContainer} from './navigation/index';
const App = () => {
  return (
    <AppProvider>
      <AppNavContainer />
    </AppProvider>
  );
};

export default App;
