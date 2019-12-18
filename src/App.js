import React from 'react';
import Routing from './router/routing'

import {StateProvider} from './store.js'

function App() {
  return (    
    <StateProvider>
           <Routing/>
    </StateProvider>
  );
}

export default App;
