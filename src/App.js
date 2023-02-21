import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import './App.css';
import ResponsiveDrawer from './components/Navbar/Navbar';
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home')
  }, [])
  return (
    <div className="App">
      <ResponsiveDrawer />
    </div>
  );
}

export default App;
