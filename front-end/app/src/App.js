import React, {useMemo} from 'react';

import './global.css';

import NaoAutenticado from './container/naoAutenticado';
import Autenticado from './container/autenticado';

function App() {
  const auth = useMemo(() => localStorage.getItem('token'),[]);
  return (
    <div className="container">
    {auth ? <Autenticado /> : <NaoAutenticado  />}
    </div>
  );
}

export default App;
