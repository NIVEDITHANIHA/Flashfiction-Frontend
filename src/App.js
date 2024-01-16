import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Authenticate from './components/Authenticate';
import Dashboard from './pages/Dashboard';
import Userdashboard from './pages/Userdashboard';
import EditFlashfictions from './components/EditFlashfictions';
import { isAuthShareContext } from './context/Contextshared';
import { useContext } from 'react';
function App() {
  const { isAuthContext, setisAuthContext } = useContext(isAuthShareContext)

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/register' element={<Authenticate register={"register"} />}></Route>
        <Route path='/login' element={<Authenticate />}></Route>
        <Route path='/dashboard' element={isAuthContext ? <Dashboard /> : <Home />}></Route>
        <Route path='/Userdashboard' element={<Userdashboard />}></Route>

      </Routes>

    </div>
  );
}

export default App;
