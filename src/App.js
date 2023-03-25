import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';

import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route exact path="/profile/:username" element={<Profile profile />} />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
