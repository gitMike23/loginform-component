import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';


function App() {
  const cntx = useContext(AuthContext)
  return (
    <React.Fragment>
      <MainHeader/>
      <main>
        {!cntx.isLoggedIn && <Login />}
        {cntx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>

    
   
  );
}

export default App;
