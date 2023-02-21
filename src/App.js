import './App.css';
import { Routes, Route } from 'react-router'
import ResponsiveDrawer from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ResponsiveDrawer} />
      </Routes>
    </div>
  );
}

export default App;
