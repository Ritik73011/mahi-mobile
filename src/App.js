import LoginContext from './context/LoginContext'
import './App.css';
import ResponsiveDrawer from './components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
function App() {
  const [login, setLogin] = useState(false);

  const checkLogin = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true);
      }
    });
  }

  const setLoginStatus = (val) => {
    setLogin(val);
  }

  useEffect(() => {
    checkLogin();
  }, [login])
  return (
    <div className="App">
      <LoginContext.Provider value={{ login, setLoginStatus }}>
        <ResponsiveDrawer />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
