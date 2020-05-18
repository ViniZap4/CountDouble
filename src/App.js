import React, { useState } from 'react';
import Count from './Components/Counter/index';
import Mirror from './Components/mirror/index';

import CountProvider from './Count/Conunt'

import './App.css';

function App() {

  return (
    <div>
      <CountProvider>
        <Count />

        <hr />

        <Mirror />
     </CountProvider>
    </div>
  );
}

export default App;
