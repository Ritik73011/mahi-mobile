import LoginContext from './context/LoginContext'
import './App.css';
import ResponsiveDrawer from './components/Navbar/Navbar';
import { useState } from 'react';
function App() {
  const [login, setLogin] = useState(false);
  const setLoginStatus = (val) => {
    setLogin(val);
  }
  return (
    <div className="App">
      <LoginContext.Provider value={{ login, setLoginStatus }}>
        <ResponsiveDrawer />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
