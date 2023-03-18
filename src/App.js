import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Register from './Pages/Register/Register';

import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile/:username" element={<Profile profile />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
